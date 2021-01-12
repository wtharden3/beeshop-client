import { Component } from 'react';
// import Cart from './Cart';

type OrdersProps = {
  token: string;
};

type OrderState = {
  //token: string;
};

class Orders extends Component<OrdersProps, OrderState> {
  constructor(props: OrdersProps) {
    super(props);
    this.state = {
      //token: this.props.token,
    };
  }

  render() {
    const {token} = this.props;
    return (
      <div>
        <p>{token}</p>
        {/* <Cart token={this.state.token}/> */}
      </div>
    );
  }
}

export default Orders;
