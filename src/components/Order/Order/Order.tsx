import React from 'react';
import OrderTitle from '../OrderTitle/OrderTitle';
import classes from './Order.module.css';
import OrderParagraph from '../OrderParagraph/OrderParagraph';

export interface OrderProps {
  title: string;
  date: string;
  location: string
}

const Order = (props: OrderProps) => {
  return (
    <div className={classes.Order}>
      <OrderTitle title={props.title} />
      <OrderParagraph text={props.date} />
      <OrderParagraph text={props.location} />
    </div>
  )
};

export default Order;