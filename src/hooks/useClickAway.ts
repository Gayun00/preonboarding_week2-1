import { useEffect, useRef, useState } from 'react'

function useClickAway() {
  const [isOpened, setIsOpened] = useState(false);
  const clickRef = useRef<HTMLElement>(null)

  function handleClickAway(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if(!clickRef.current?.contains(target)) setIsOpened(false)
  }

  function onToggle() {
    setIsOpened(!isOpened);
  }

  useEffect(() => {
    if (isOpened) {
      document.addEventListener("click", handleClickAway)
    } else {
      document.removeEventListener("click", handleClickAway)
    }
    return () => {
      document.removeEventListener("click", handleClickAway)
    }
  }, [isOpened]);
  return {clickRef, isOpened, setIsOpened, onToggle}
}

export default useClickAway