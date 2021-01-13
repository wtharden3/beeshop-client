import { Component, FormEvent, MouseEvent } from 'react';
import { Button } from 'antd';
import APIURL from '../../helpers/environment';
// import { stringify } from 'querystring';

type OrderEditProps = {
  token: string;
  id: number;
};

type OrderEditState = {
  holder: string;
  orderid: number;
  order: {
    totalCost: string;
    totalItems: string;
  };
};

type OrderObj = {
  order: {
    totalCost: string;
    totalItems: string;
  };
};

class OrderEdit extends Component<OrderEditProps, OrderEditState> {
  constructor(props: OrderEditProps) {
    super(props);
    this.state = {
      holder: '',
      orderid: this.props.id,
      order: {
        totalCost: '',
        totalItems: '',
      },
    };
  }

  handleEditTotalCost = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      order: {
        totalCost: e.currentTarget.value,
        totalItems: this.state.order.totalItems,
      },
    });
  };

  handleEditTotalItems = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      order: {
        totalCost: this.state.order.totalCost,
        totalItems: e.currentTarget.value,
      },
    });
  };

  handleEditSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('clicked from Order Edit. This is Ant design');
    const orderid: number = this.state.orderid;
    const url: string = `${APIURL}/orders/edit/${orderid}`
    const bodyObj: OrderObj = {
      order: {
        totalCost: this.state.order.totalCost,
        totalItems: this.state.order.totalItems,
      }
    }

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(bodyObj),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleEditSubmit}>
          <input 
            type="number"
            placeholder="Total Items"
            value={this.state.order.totalItems}
            onChange={this.handleEditTotalItems}
          />
           <input 
            type="number"
            placeholder="Total Cost"
            value={this.state.order.totalCost}
            onChange={this.handleEditTotalCost}
          />
        <Button type="primary">
          Submit Edit
        </Button>

        </form>
      </div>
    );
  }
}

export default OrderEdit;
