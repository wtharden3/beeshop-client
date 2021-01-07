import { Component } from 'react';
import OrderCreate from './OrderCreate';

type OrdersProps = {
  token: string;
};

type OrderState = {
  token: string;
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
        <OrderCreate token={this.state.token}/>
      </div>
    );
  }
}

export default Orders;
