import { Component, FormEvent, MouseEvent } from 'react';
import APIURL from '../../helpers/environment';
import { Button } from 'antd';

type ProductCreateProps = {
  token: string;
  getProducts: (e: MouseEvent | FormEvent) => void;
  // handleProNameChange: (e: FormEvent<HTMLInputElement>) => void;
};

type ProductCreateState = {
  product: {
    productName: string;
    description: string;
    category: string;
    subCategory: string;
    productCost: string;
    size: string;
  };
};

class ProductCreate extends Component<ProductCreateProps, ProductCreateState> {
  constructor(props: ProductCreateProps) {
    super(props);
    this.state = {
      product: {
        productName: '',
        description: '',
        category: '',
        subCategory: '',
        productCost: '',
        size: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleProNameChange = this.handleProNameChange(this);
  }

  // handleChange = (e: FormEvent, stateKey: ReactNode, stateValue: string | number): void => {
  //   this.setState({stateKey: stateValue})
  // }

  handleNameChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: e.currentTarget.value, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    });
  };

  handleDescriptionChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: e.currentTarget.value,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    });
  };

  handleCategoryChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: e.currentTarget.value,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    });
  };

  handleProdSubcategoryChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: e.currentTarget.value,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    });
  };

  handleProductCostChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: e.currentTarget.value,
        size: this.state.product.size,
      },
    });
  };

  handleSizeChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: e.currentTarget.value,
      },
    });
  };

  handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    this.props.getProducts(e);
    const url: string = `${APIURL}/products/addtoinventory`;
    const bodyObj: ProductCreateState = {
      product: {
        productName: this.state.product.productName,
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    };

    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
      body: JSON.stringify(bodyObj),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Add a Product</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={this.state.product.productName}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="Product Description"
            value={this.state.product.description}
            onChange={this.handleDescriptionChange}
          />
          <input
            type="text"
            placeholder="Product Category"
            value={this.state.product.category}
            onChange={this.handleCategoryChange}
          />
          <input
            type="text"
            placeholder="Product subcategory"
            value={this.state.product.subCategory}
            onChange={this.handleProdSubcategoryChange}
          />
          <input
            type="number"
            placeholder="Product Cost"
            value={this.state.product.productCost}
            onChange={this.handleProductCostChange}
          />
          <input
            type="text"
            placeholder="Product Size"
            value={this.state.product.size}
            onChange={this.handleSizeChange}
          />
          <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
        </form>
        <Button  onClick={this.props.getProducts}>
          Show updated Product List
        </Button>
      </div>
    );
  }
}

export default ProductCreate;
