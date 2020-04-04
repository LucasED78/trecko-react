import React from 'react';
import classes from './Subtitle.module.css';

export interface SubtitleProps {
  subtitle: string
}

const Subtitle = (props: SubtitleProps) => {
  return <div className={classes.Subtitle}>{ props.subtitle }</div>
}

export default Subtitle;