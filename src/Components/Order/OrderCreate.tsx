import { Component, MouseEvent } from 'react';
import APIURL from '../../helpers/environment';

type OrderCreateProps = {};

type OrderCreateState = {
  total: number;
  subTotal: number;
  tax: number;
  details: string;
  shippingFee: number;
  hasShipped: boolean;
};

// type bodyObj = {
  
// }

class OrderCreate extends Component<OrderCreateProps, OrderCreateState> {
  constructor(props: OrderCreateProps) {
    super(props);
    this.state = {
      total: 0,
      subTotal: 0,
      tax: 0,
      details: '',
      shippingFee: 0,
      hasShipped: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const url: string = `${APIURL}/orders/placeorder`;
    const bodyObj: OrderCreateState = {
      total: this.state.total,
      subTotal: this.state.subTotal,
      tax: this.state.tax,
      details: this.state.details,
      shippingFee: this.state.shippingFee,
      hasShipped: this.state.hasShipped
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  };

  render(){
    return(
      <div>
        <p>This will later be a modal or a pop out of some kind</p>
        <h2>Cart</h2>
        <p>here are your cart details, click below to place your order</p>
        <div>
          <p>{this.state.details}</p>
        </div>
        
          
          <button onClick={this.handleClick}>Place Order</button>
        
      </div>
    )
  }
}

export default OrderCreate;
