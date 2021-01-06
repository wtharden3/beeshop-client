import {Component} from 'react';

type ProductEditProps = {
  
}

type ProductEditState = {
  holder: string
}

class ProductEdit extends Component<ProductEditProps, ProductEditState>{
  constructor(props: ProductEditProps){
    super(props);
    this.state={
      holder: ""
    }
  }
}

export default ProductEdit;