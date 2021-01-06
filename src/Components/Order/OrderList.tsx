import {Component} from 'react';

type OrderListProps = {
  
}

type OrderListState = {
  holder: string
}

class OrderList extends Component<OrderListProps, OrderListState>{
  constructor(props: OrderListProps){
    super(props);
    this.state={
      holder: ""
    }
  }
}

export default OrderList;