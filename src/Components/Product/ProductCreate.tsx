import { Component, FormEvent } from 'react';
import APIURL from '../../helpers/environment';

type ProductCreateProps = {
  token: string;
  // handleProNameChange: (e: FormEvent<HTMLInputElement>) => void;
};

type ProductCreateState = {
  product: {
    productName: string;
    description: string;
    category: string;
    subCategory: string;
    sku: number;
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
        sku: 0,
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
        sku: this.state.product.sku,
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
        sku: this.state.product.sku,
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
        sku: this.state.product.sku,
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
        sku: this.state.product.sku,
        size: this.state.product.size,
      },
    });
  };

  handleSkuChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        sku: e.currentTarget.valueAsNumber,
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
        sku: this.state.product.sku,
        size: e.currentTarget.value,
      },
    });
  };

  handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const url: string = `${APIURL}/products/addtoinventory`;
    const bodyObj: ProductCreateState = {
      product: {
        productName: this.state.product.productName,
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        sku: this.state.product.sku,
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
        <h1>Add a Product</h1>
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
            placeholder="Product subcategory"
            value={this.state.product.sku}
            onChange={this.handleSkuChange}
          />
        </form>
      </div>
    );
  }
}

export default ProductCreate;
