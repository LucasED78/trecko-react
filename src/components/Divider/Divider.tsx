import React from 'react';
import classes from './Divider.module.css'

export interface DividerProps {
  width: string | number
}

const Divider = (props: DividerProps) => {
  return <div className={classes.Divider} style={{ width: props.width || "100%" }}></div>
}

export default Divider;