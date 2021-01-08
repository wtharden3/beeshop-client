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

//plant.append('image', this.state.plantImg)
//must you append() because it's form-data

export default ProductEdit;