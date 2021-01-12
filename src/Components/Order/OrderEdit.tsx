import {Component, MouseEvent} from 'react';
import { Button } from 'antd';



type OrderEditProps = {
  token: string;
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

  handleEditClick = (e: MouseEvent) => {
    console.log('clicked from Order Edit. This is Ant design')
  }

  render(){
    return(
      <div>
        
        <Button type="primary" onClick={this.handleEditClick}>Click Me</Button>
      </div>
    )
  }
}

export default OrderEdit;