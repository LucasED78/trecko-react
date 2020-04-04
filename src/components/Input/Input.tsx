import React, { ChangeEvent } from 'react';
import classes from './Input.module.css';

export interface InputProps {
  value?: string;
  onInputChanged(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  width?: string | number;
}

const Input = (props: InputProps) => {
  return (
    <input 
      className={classes.Input}
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onInputChanged}
      style={{ width: props.width || '300px' }} />
  )
}

export default Input;