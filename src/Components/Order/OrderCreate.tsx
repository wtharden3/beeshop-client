import { Component } from 'react';

type OrderCreateProps = {};

type OrderCreateState = {
  holder: string;
  total: number;
  subTotal: number;
  tax: number;
  details: string;
  shippingFee: number;
  hasShipped: boolean;
};

class OrderCreate extends Component<OrderCreateProps, OrderCreateState> {
  constructor(props: OrderCreateProps) {
    super(props);
    this.state = {
      holder: '',
      total: 0,
      subTotal: 0,
      tax: 0,
      details: '',
      shippingFee: 0,
      hasShipped: false,
    };
  }
}

export default OrderCreate;
