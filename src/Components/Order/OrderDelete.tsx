import {Component, MouseEvent} from 'react';
import { Button } from 'antd';
import APIURL from '../../helpers/environment';

type OrderDeleteProps = {
  token: string;
  id: number;
}

type OrderDeleteState = {
  holder: string;
  orderid: number;
}

class OrderDelete extends Component<OrderDeleteProps, OrderDeleteState>{
  constructor(props: OrderDeleteProps){
    super(props);
    this.state={
      holder: "",
      orderid: this.props.id
    }
  }

  handleDeleteBtn = (e: MouseEvent) => {
    e.preventDefault()
    console.log('Delete this order')
    const orderid: number = this.state.orderid;
    const url: string = `${APIURL}/orders/delete/${orderid}`;

    fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token
      })
    })
    .then(res => res.json())
    .then(data => console.log('this is from DELETE==>', data))
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <p>Delete this product</p>
        <Button type="primary" onClick={this.handleDeleteBtn}>Delete</Button>
      </div>
    )
  }
}

export default OrderDelete;