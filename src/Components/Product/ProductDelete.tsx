import {Component, MouseEvent, FormEvent} from 'react';
import { Button, message } from 'antd';
import APIURL from '../../helpers/environment';
import { DeleteOutlined } from '@ant-design/icons';

type ProductDeleteProps = {
  token: string;
  id: number;
  getProducts: (e: MouseEvent | FormEvent) => void;
}

type ProductDeleteState = {
  holder: string;
  productid: number;
}

class ProductDelete extends Component<ProductDeleteProps, ProductDeleteState>{
  constructor(props: ProductDeleteProps){
    super(props);
    this.state={
      holder: "",
      productid: this.props.id
    }
  }

  success = () => {
    message.success('You have successfully Deleted this order');
  };

  error = () => {
    message.error('Please try again');
  };

  handleDeleteBtn = (e: MouseEvent) => {
    e.preventDefault()
    console.log('Delete this product')
    const productid: number = this.state.productid;
    const url: string = `${APIURL}/products/delete/${productid}`;

    fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log('this is from DELETE==>', data)
      this.props.getProducts(e);
      this.success()
      })
    .catch(err => {
      console.log(err)
      this.error()
      })
  }


  render(){
    return(
      <div>
        <Button onClick={this.handleDeleteBtn}>delete {' '} <span className="icons-list"><DeleteOutlined /></span></Button>
      </div>
    )
  }
}

export default ProductDelete;