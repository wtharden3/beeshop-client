import { Component, FormEvent } from 'react';
import APIURL from '../../helpers/environment';
import { Button } from 'antd';

type ProductEditProps = {
  token: string;
  id: number;
  productCost: string;
  productName: string;
  description: string;
    category: string;
    subCategory: string;
    // id: number;
    size: string;
};

type ProductEditState = {
  productid: number;
  product: {
    productName: string;
    productCost: string;
    description: string;
    category: string;
    subCategory: string;
    // id: number;
    size: string;
  };

};

type BodyObj = {
  
  product: {
    productName: string;
    productCost: string;
    description: string;
    category: string;
    subCategory: string;
    
    size: string;
  };

};

class ProductEdit extends Component<ProductEditProps, ProductEditState> {
  constructor(props: ProductEditProps) {
    super(props);
    this.state = {
      productid: this.props.id,
      product: {
        productName: this.props.productName,
        productCost: this.props.productCost,
        description: this.props.description,
        category: this.props.category,
        subCategory: this.props.subCategory,
        // id: 0,
        size: this.props.size,
      },
    };
  }

  handleEditNameChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: e.currentTarget.value, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditDescriptionChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: e.currentTarget.value,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditCategoryChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: e.currentTarget.value,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditProdSubcategoryChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: e.currentTarget.value,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditproductCostChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: e.currentTarget.value,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditSizeChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: e.currentTarget.value,
      },
    });
  };

  handleEditSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const productid: number = this.state.productid;
    const url: string = `${APIURL}/products/edit/${productid}`;
    const bodyObj: BodyObj = {
      product: {
        productName: this.state.product.productName,
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size
      }
    }

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(bodyObj),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        this will be a modal or pop out
        <h2>Product Edit</h2>
        <form onSubmit={this.handleEditSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={this.state.product.productName}
            onChange={this.handleEditNameChange}
          />
          <input
            type="text"
            placeholder="Product Description"
            value={this.state.product.description}
            onChange={this.handleEditDescriptionChange}
          />
          <input
            type="text"
            placeholder="Product Category"
            value={this.state.product.category}
            onChange={this.handleEditCategoryChange}
          />
          <input
            type="text"
            placeholder="Product subcategory"
            value={this.state.product.subCategory}
            onChange={this.handleEditProdSubcategoryChange}
          />
          <input
            type="number"
            placeholder="Product productCost"
            value={this.state.product.productCost}
            onChange={this.handleEditproductCostChange}
          />
          <input
            type="text"
            placeholder="Product Size"
            value={this.state.product.size}
            onChange={this.handleEditSizeChange}
          />
          <Button type="primary" onClick={this.handleEditSubmit}>Submit</Button>
        </form>
      </div>
    );
  }
}

//plant.append('image', this.state.plantImg)
//must you append() because it's form-data

export default ProductEdit;
