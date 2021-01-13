import {Component, MouseEvent} from 'react';
import { Button } from 'antd';
import APIURL from '../../helpers/environment';

type ProductDeleteProps = {
  token: string;
  id: number;
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

export default ProductDelete;