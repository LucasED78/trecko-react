import React from 'react';
import classes from './Divider.module.css'

export interface DividerProps {
  width?: string | number;
  margin?: string
}

const Divider = (props: DividerProps) => {
  return <div className={classes.Divider} style={{ width: props.width || "100%", margin: props.margin || "20px 0" }}></div>
}

export default Divider;