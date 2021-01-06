import {Component} from 'react';

type OrderEditProps = {
  
}

type OrderEditState = {
  holder: string
}

class OrderEdit extends Component<OrderEditProps, OrderEditState>{
  constructor(props: OrderEditProps){
    super(props);
    this.state={
      holder: ""
    }
  }
}

export default OrderEdit;