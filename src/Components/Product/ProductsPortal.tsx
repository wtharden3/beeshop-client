import {Component} from 'react';
import ProductCreate from './ProductCreate';

type ProductsPortalProps = {
  token: string;
} 

type ProductsPortalPortState = {
  // token: string;
  header: string;
}

class ProductsPortal extends Component<ProductsPortalProps, ProductsPortalPortState> {
  constructor(props: ProductsPortalProps){
    super(props);
    this.state = {
      header: 'Products Portal',
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.header}</h1>
        <ProductCreate token={this.props.token}/>
      </div>
    )
  }
}

export default ProductsPortal;