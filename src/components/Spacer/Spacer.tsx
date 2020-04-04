import React from 'react';

export interface SpacerProps {
  verticalSpace?: string | number;
  horizontalSpace?: string | number;
}

const Spacer = (props: SpacerProps) => {
  return (
    <div style={{ margin: `${props.verticalSpace || 0} ${props.horizontalSpace || 0}` }}></div>
  )
}

export default Spacer;