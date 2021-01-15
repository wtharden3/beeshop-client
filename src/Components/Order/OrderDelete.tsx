import { Component, MouseEvent } from 'react';
import { Button, message } from 'antd';
import APIURL from '../../helpers/environment';
import { DeleteOutlined } from '@ant-design/icons';

type OrderDeleteProps = {
  token: string;
  id: number;
  getAllOrders: () => void;
};

type OrderDeleteState = {
  holder: string;
  orderid: number;
};

class OrderDelete extends Component<OrderDeleteProps, OrderDeleteState> {
  constructor(props: OrderDeleteProps) {
    super(props);
    this.state = {
      holder: '',
      orderid: this.props.id,
    };
  }

  success = () => {
    message.success('You have successfully Deleted this order');
  };

  error = () => {
    message.error('Please try again');
  };

  handleDeleteBtn = (e: MouseEvent) => {
    e.preventDefault();
    console.log('Delete this order');
    const orderid: number = this.state.orderid;
    const url: string = `${APIURL}/orders/delete/${orderid}`;

    fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('this is from DELETE==>', data);
        this.props.getAllOrders()
        this.success();
      })
      .catch(err => {

        this.error();
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleDeleteBtn}>
          Delete{' '}
          <span className="icons-list">
            <DeleteOutlined />
          </span>
        </Button>
      </div>
    );
  }
}

export default OrderDelete;
