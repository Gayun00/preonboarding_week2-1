import React from 'react';
import styled from 'styled-components';

interface ToggleProps {
  size: 1;
  disabled: false;
  isToggle: true | boolean;
  onChange(): void;
}

interface ToggleStyledProps {
  size: 1;
}

function ToggleBtn({ size, onChange, disabled, isToggle }: ToggleProps) {
  return (
    <ToggleButton
      type="checkbox"
      size={size}
      checked={isToggle}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

const ToggleButton = styled.input<ToggleStyledProps>`
  position: relative;
  width: ${({ size }: ToggleStyledProps) => 34 * ((9 + size) / 10)}px;
  height: ${({ size }: ToggleStyledProps) => 14 * ((9 + size) / 10)}px;
  -webkit-appearance: none;
  outline: none;
  border-radius: 20px;
  background: #c2c2c2;
  transition: 0.2s;
  &:checked {
    background: #bbdefb;
    ::before {
      left: ${({ size }: ToggleStyledProps) => 15 * ((9 + size) / 10)}px;
      background: #2196f3;
    }
  }
  ::before {
    content: '';
    position: absolute;
    width: ${({ size }: ToggleStyledProps) => 20 * ((9 + size) / 10)}px;
    height: ${({ size }: ToggleStyledProps) => 20 * ((9 + size) / 10)}px;
    border-radius: 20px;
    top: -2.6px;
    left: -1px;
    background: #f5f5f5;
    transform: scale(1);
    box-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
    transition: 0.2s;
  }
  &:disabled {
    background: #cac9c9;
    ::before {
      background: rgb(250, 250, 250);
    }
  }
`;

export default ToggleBtn;
