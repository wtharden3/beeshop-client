import {Component} from 'react';

type OrderDeleteProps = {
  
}

type OrderDeleteState = {
  holder: string
}

class OrderDelete extends Component<OrderDeleteProps, OrderDeleteState>{
  constructor(props: OrderDeleteProps){
    super(props);
    this.state={
      holder: ""
    }
  }
}

export default OrderDelete;