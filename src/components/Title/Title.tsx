import React from 'react';
import classes from './Title.module.css';

export interface TitleProps {
  title: string
}

const Title = (props: TitleProps) => {
  return <h1 className={classes.Title}>{ props.title }</h1>
}

export default Title;