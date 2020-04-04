import React, { ReactElement } from 'react';
import classes from './ContentWrapper.module.css'

export interface ContentWrapperProps {
  children: ReactElement;
}

const ContentWrapper = (props: ContentWrapperProps) => {
  return (
    <div className={classes.Content__wrapper}>
      { props.children }
    </div>
  )
}

export default ContentWrapper;