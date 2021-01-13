import { Component, MouseEvent } from 'react';
import APIURL from '../../helpers/environment';
import { Button } from 'antd';
import OrderEdit from './OrderEdit';
import OrderDelete from './OrderDelete';
// import Cart from './Cart';

type OrdersProps = {
  token: string;
};

type OrderState = {
  //token: string;
  orders: Array<OrderObj>;
};

type OrderObj = {
  id: number;
  totalCost: string;
  totalItems: string;
};

class Orders extends Component<OrdersProps, OrderState> {
  constructor(props: OrdersProps) {
    super(props);
    this.state = {
      //token: this.props.token,
      orders: [],
    };
  }

  // getAllOrders = () => {

  // }
  handleEditClick = (e: MouseEvent) => {
    console.log('clicked from Order Edit. This is Ant design')
  }


  componentDidMount() {
    fetch(`${APIURL}/orders/list`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('orders data', data.order);
        if (data.order) {
          this.setState({ orders: data.order });
        } else {
          console.log('there is no orders yet');
        }
      })
      .catch(err => console.log(err));
  }

  displayOrders = () => {
    return this.state.orders.map(order => {
      order ? (
        <div key={order.id}>
          <p>Order id: {order.id}</p>
          <p>Total Cost: {order.totalCost}</p>
          <p>Total Items: {order.totalItems}</p>
          <OrderEdit token={this.props.token} id={order.id}/>
        </div>
      ) : (
        <div>
          <p>There are no orders</p>
        </div>
      );
    });
  };

  render() {
    const { token } = this.props;
    const { orders } = this.state;
    return (
      <div>
        <div>
          {/* <div>{orders.message}</div> */}
          <h3>Orders</h3>
          {/* <Cart token={this.state.token}/> */}
          {orders.length
            ? orders.map(order => (
                <div key={order.id}>
                  <p>Order ID: {order.id}</p>
                  <p>Total Cost: {order.totalCost}</p>
                  <p>Total Items: {order.totalItems}</p>
                  <OrderEdit token={token} id={order.id}/>
                  <OrderDelete token={token} id={order.id}/>
                  <hr />
                </div>
              ))
            : null}
        </div>
        {/* <OrderEdit token={token}/> */}
        {/* Edit*/}
        <Button type="primary" onClick={this.handleEditClick}>Click Me</Button>
      </div>
    );
  }
}

export default Orders;
