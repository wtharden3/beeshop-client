import { Component, MouseEvent } from 'react';
import APIURL from '../../helpers/environment';

type OrderCreateProps = {
  token: string;
};

type OrderCreateState = {
  total: number;
  subTotal: number;
  tax: number;
  details: string;
  shippingFee: number;
  hasShipped: boolean;
  // cart: Array<string>;
  //total items
  //total payment
  //cart items - array
  //token
  // token: string | undefined;
};

type BodyObj = {
  order: {
    total: number;
    subTotal: number;
    tax: number;
    details: string;
    shippingFee: number;
    hasShipped: boolean;
  };
};

class OrderCreate extends Component<OrderCreateProps, OrderCreateState> {
  constructor(props: OrderCreateProps) {
    super(props);
    this.state = {
      total: 0,
      subTotal: 0,
      tax: 0,
      details: 'hello',
      shippingFee: 0,
      hasShipped: false,
      // cart: []
      // token: this.props.token,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const url: string = `${APIURL}/orders/placeorder`;
    const bodyObj: BodyObj = {
      order: {
        total: this.state.total,
        subTotal: this.state.subTotal,
        tax: this.state.tax,
        details: this.state.details,
        shippingFee: this.state.shippingFee,
        hasShipped: this.state.hasShipped,
      },
    };

    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
      body: JSON.stringify(bodyObj),
    })
      .then(res => res.json())
      .then(data => {
        console.log('hello again mark');
        console.log('data', data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <p>This will later be a modal or a pop out of some kind</p>
        <h2>Cart</h2>
        <p>here are your cart details, click below to place your order</p>
        <div>
          <p>{this.state.details}</p>
          <p>here is the token below</p>
          <p>{this.props.token}</p>
        </div>

        <button onClick={this.handleClick}>Place Order</button>
      </div>
    );
  }
}

export default OrderCreate;
