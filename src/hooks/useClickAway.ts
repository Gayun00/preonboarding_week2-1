import { useEffect, useRef, useState } from 'react';

export interface ClickAway<T> {
  clickRef: T;
  isOpened: boolean;
  onToggle: () => void;
}

function useClickAway() {
  const [isOpened, setIsOpened] = useState(false);
  const clickRef = useRef<any>(null);

  function handleClickAway(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (!clickRef.current?.contains(target)) setIsOpened(false);
  }

  function onToggle() {
    setIsOpened(!isOpened);
  }

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('click', handleClickAway);
    } else {
      document.removeEventListener('click', handleClickAway);
    }
    return () => {
      document.removeEventListener('click', handleClickAway);
    };
  }, [isOpened]);
  return { clickRef, isOpened, onToggle };
}

export default useClickAway;
