import { Component, FormEvent } from 'react';
import { Button } from 'antd';
import APIURL from '../../helpers/environment';
// import { stringify } from 'querystring';

type OrderEditProps = {
  token: string;
  id: number;
  details: string;
  shippingInfo: string;
  getAllOrders: () => void;
};

type OrderEditState = {
  holder: string;
  orderid: number;
  order: {
    // totalCost: string;
    // totalItems: string;
    details: string;
    shippingInfo: string;
  };
};

type OrderObj = {
  order: {
    // totalCost: string;
    // totalItems: string;
    details: string;
    shippingInfo: string;
  };
};

class OrderEdit extends Component<OrderEditProps, OrderEditState> {
  constructor(props: OrderEditProps) {
    super(props);
    this.state = {
      holder: '',
      orderid: this.props.id,
      order: {
        // totalCost: '',
        // totalItems: '',
        details: this.props.details,
        shippingInfo: this.props.shippingInfo
      },
    };
  }

  handleEditDeets = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      order: {
        details: e.currentTarget.value,
        shippingInfo: this.state.order.shippingInfo
      },
    });
  };

  handleEditShipInfo = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      order: {
        details: this.state.order.details,
        shippingInfo: e.currentTarget.value
      },
    });
  };

  handleEditSubmit = (e: FormEvent): void => {
    e.preventDefault();
    //console.log('clicked from Order Edit. This is Ant design');
    const orderid: number = this.state.orderid;
    const url: string = `${APIURL}/orders/edit/${orderid}`;
    const bodyObj: OrderObj = {
      order: {
        details: this.state.order.details,
        shippingInfo: this.state.order.shippingInfo
      },
    };

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(bodyObj),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.props.getAllOrders()
        })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleEditSubmit}>
          <input
            type="text"
            placeholder="Details"
            value={this.state.order.details}
            onChange={this.handleEditDeets}
          />
          <input
            type="text"
            placeholder="Shipping Info"
            value={this.state.order.shippingInfo}
            onChange={this.handleEditShipInfo}
          />
          <Button type="primary" onClick={this.handleEditSubmit}>
            Submit Edit
          </Button>
        </form>
      </div>
    );
  }
}

export default OrderEdit;
