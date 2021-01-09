import { Component } from 'react';
import APIURL from '../../helpers/environment';

// type HomeProps = {
//   displayProducts: () => React.ReactNode;
// }

type Products = {
  message: string;
  productList: Array<Productobj>;
};

type Productobj = {
  id: number;
  productName: string;
  productCost: string;
  category: string;
  subCategory: string;
  description: string;
  size: string;
  sku: number;
};

class Home extends Component<{}, Products> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: '',
      productList: [],
    };

    // this.displayProducts = this.displayProducts.bind(this)
  }

  displayProducts = () => {
    this.state.productList.map(product => (
      <ul key={product.id}>
        <li>{product.category}</li>
        <li>{product.subCategory}</li>
        <li>{product.productName}</li>
        <li>{product.size}</li>
        <li>{product.description}</li>
        <li>{product.productCost}</li>
      </ul>
    ));
  };

  componentDidMount() {
    fetch(`${APIURL}/products/inventory`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .then(data => {
        // console.log('data.products', data.products);
        // console.log(typeof data);
        // console.log('data', data);
        this.setState({ productList: data.products });
        this.setState({ message: data.message });
      });
  }

  render() {
    return (
      <div>
        Home
        <h1>Home Page!</h1>
        {/* <h2>{this.state.products.productName}</h2> */}
        <p>{this.state.message}</p>
        <div>
          {this.state.productList ? (this.state.productList.map(product => (
            <ul key={product.id}>
              <li><h4>{product.productName}</h4></li>
              <li>{product.category}</li>
              <li>{product.subCategory}</li>
              <li>{product.size}</li>
              <li>{product.description}</li>
            </ul>
          ))) : (<div></div>)}
        </div>
      </div>
    );
  }
}

export default Home;
