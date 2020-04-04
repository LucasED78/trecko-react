import React, { ReactElement } from 'react';
import classes from './FlexRow.module.css';

export interface FlexRowProps {
  children: ReactElement;
  style?: React.CSSProperties
  modifier?: string
}

const FlexRow = (props: FlexRowProps) => {
  return <div className={[classes.Flex__row, classes[props.modifier || '']].join(' ')} style={props.style}>{ props.children }</div>
}

export default FlexRow;