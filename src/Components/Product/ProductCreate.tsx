import {Component} from 'react';

type ProductCreateProps = {
  
}

type ProductCreateState = {
  holder: string
}

class ProductCreate extends Component<ProductCreateProps, ProductCreateState>{
  constructor(props: ProductCreateProps){
    super(props);
    this.state={
      holder: ""
    }
  }
}

export default ProductCreate;