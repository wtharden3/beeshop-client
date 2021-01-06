import { Component } from 'react';
import OrderCreate from './OrderCreate';

type OrdersProps = {
  token: string | undefined;
};

type OrderState = {
  token: string | undefined;
};

class Orders extends Component<OrdersProps, OrderState> {
  constructor(props: OrdersProps) {
    super(props);
    this.state = {
      token: this.props.token,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.token}</p>
        <OrderCreate />
      </div>
    );
  }
}

export default Orders;
