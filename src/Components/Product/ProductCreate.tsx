import { Component } from 'react';

type ProductCreateProps = {};

type ProductCreateState = {
  productName: string;
  description: string;
  category: string;
  subCategory: string;
  sku: number;
  size: string;
};

class ProductCreate extends Component<ProductCreateProps, ProductCreateState> {
  constructor(props: ProductCreateProps) {
    super(props);
    this.state = {
      productName: '',
      description: '',
      category: '',
      subCategory: '',
      sku: 0,
      size: '',
    };
  }
}

export default ProductCreate;
