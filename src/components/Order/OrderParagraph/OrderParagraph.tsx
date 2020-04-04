import React from 'react';
import classes from './OrderParagraph.module.css';

export interface OrderParagraphProps {
  text: string
}

const OrderParagraph = (props: OrderParagraphProps) => {
  return (
    <div className={classes.Order__paragraph}>{ props.text }</div>
  )
}

export default OrderParagraph;