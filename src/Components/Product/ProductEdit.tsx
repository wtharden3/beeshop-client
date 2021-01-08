import { Component, FormEvent } from 'react';
import APIURL from '../../helpers/environment';

type ProductEditProps = {
  token: string;
};

type ProductEditState = {
  
  product: {
    productName: string;
    description: string;
    category: string;
    subCategory: string;
    sku: string;
    size: string;
  };

};

class ProductEdit extends Component<ProductEditProps, ProductEditState> {
  constructor(props: ProductEditProps) {
    super(props);
    this.state = {
      
      product: {
        productName: '',
        description: '',
        category: '',
        subCategory: '',
        sku: '',
        size: '',
      },
    };
  }

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
        sku: e.currentTarget.value,
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
    const url: string = `${APIURL}/products/edit/:productid`;
    const bodyObj: ProductEditState = {
      product: {
        productName: this.state.product.productName,
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        sku: this.state.product.sku,
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
  }

  render() {
    return (
      <div>
        this will be a modal or pop out
        <h2>Product Edit</h2>
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
            placeholder="Product Sku"
            value={this.state.product.sku}
            onChange={this.handleSkuChange}
          />
          <input
            type="text"
            placeholder="Product Size"
            value={this.state.product.size}
            onChange={this.handleSizeChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

//plant.append('image', this.state.plantImg)
//must you append() because it's form-data

export default ProductEdit;
