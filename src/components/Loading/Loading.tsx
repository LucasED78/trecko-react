import React from 'react';
import classes from './Loading.module.css';

const Loading = _ => {
  return (
    <div className={classes.Loading}>
      <div className={classes.Spinner}></div>
    </div>
  )
};

export default Loading;