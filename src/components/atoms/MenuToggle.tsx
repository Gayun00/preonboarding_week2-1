import React from 'react';
import styled from 'styled-components';
import hamburger from 'assets/img/hamburger.png';
import { ClickAway } from 'hooks/useClickAway';

type TMenuToggle = Pick<ClickAway, 'onToggle'>;

function MenuToggle({ onToggle }: TMenuToggle) {
  const onClickButton = () => {
    onToggle();
  };

  return (
    <ToggleButton>
      <Icon src={hamburger} onClick={onClickButton} alt="hamburger" />
    </ToggleButton>
  );
}

const Icon = styled.img.attrs({
  className: 'toggleButton',
})`
  width: 18px;
  cursor: pointer;
`;
const ToggleButton = styled.button`
  display: none;

  @media only screen and (max-width: 360px) {
    display: flex;
    margin-right: 20px;
  }
`;

export default MenuToggle;
