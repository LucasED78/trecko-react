import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  children: Element|string
  onButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  width?: number;
  height?: number;
}

const Button = (props: ButtonProps) => {
  return (
    <button 
    className={classes.Button}
    type="button"
    onClick={props.onButtonClick}
    style={{ width: props.width || 0, height: props.height || 0 }}>
      { props.children }
    </button>
  )
}

export default Button;