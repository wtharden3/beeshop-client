import {Component} from 'react';

type OrderCreateProps = {
  
}

type OrderCreateState = {
  holder: string
}

class OrderCreate extends Component<OrderCreateProps, OrderCreateState>{
  constructor(props: OrderCreateProps){
    super(props);
    this.state={
      holder: ""
    }
  }
}

export default OrderCreate;