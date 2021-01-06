import {Component} from 'react';

type ProductDeleteProps = {
  
}

type ProductDeleteState = {
  holder: string
}

class ProductDelete extends Component<ProductDeleteProps, ProductDeleteState>{
  constructor(props: ProductDeleteProps){
    super(props);
    this.state={
      holder: ""
    }
  }
}

export default ProductDelete;