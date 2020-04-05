import React from 'react';
import Order from '../Order/Order';
import OrderModel from '../../../core/models/Order';
import Divider from '../../Divider/Divider';

export interface OrderListProps {
  order: OrderModel | null
}

const OrderList = (props: OrderListProps) => {
  return (
    <>
      {
        props?.order?.tracks.map((e, i, arr) => {
          return (
            <React.Fragment key={Math.random()}>
              <Order
                title={e.status} 
                location={e.locale} 
                date={`${e.trackedAt.toLocaleDateString()} ás ${e.trackedAt.toLocaleTimeString()}`} />
              
              {i < arr.length - 1 ? <Divider width="70%" /> : null}
            </React.Fragment>
          )
        })
      }
    </>
  )
}

export default OrderList;