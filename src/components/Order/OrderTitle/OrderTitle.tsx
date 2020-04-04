import React from 'react';
import classes from './OrderTitle.module.css';

interface OrderTitleProps {
  title: string
}

const OrderTitle = (props: OrderTitleProps) => {
  return (
    <div className={classes.Order__title}>
      { props.title }
    </div>
  )
};

export default OrderTitle;