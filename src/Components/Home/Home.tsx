import { Component, MouseEvent } from 'react';
import APIURL from '../../helpers/environment';

type HomeProps = {
  addToCart: (products: CartObj) => void;
  //   displayProducts: () => React.ReactNode;
};

type Products = {
  message: string;
  productList: Array<Productobj>;
};

type CartObj = {
  productName: string;
  productQuantity: number;
  productCost: number;
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

class Home extends Component<HomeProps, Products> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      message: '',
      productList: [],
    };

    // this.displayProducts = this.displayProducts.bind(this)
  }

  addToCart = (e: MouseEvent): void => {
    e.preventDefault();
    console.log(e);
    console.log('e.currentTarget ', e.currentTarget.classList.value);
    //get the value of the className that contains the product id
    const classValue = e.currentTarget.classList.value;
    console.log('classValue.length', classValue.length);
    //turns the string into and array based on spaces
    const idNumArr = classValue.split('');
    console.log('classValue.split()', idNumArr);
    //idNum.splice(0,2) removes 'p-'
    console.log('idNum.splice(0,2)', idNumArr.splice(0, 2));
    //that leaves idNum => which just leavs the id number
    //now I need to join the array to become a string again
    const idNum = idNumArr.toString();
    console.log(idNum);
    //fetch using idNum for :productid
    fetch(`${APIURL}/products/${idNum}`, {
      method: 'GET',
      headers: new Headers({ 'Content-type': 'application/json' }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  handleAddToCartBtn = (e: MouseEvent, obj: Productobj): void => {
    e.preventDefault();
    console.log('OBJ====> ', obj);
    //find product by id and add name cost and quantity

    // const prodObj =
    // this.props.addToCart()
  };

  // displayProducts = () => {
  //   this.state.productList.map(product => (
  //     <ul key={product.id}>
  //       <li>{product.category}</li>
  //       <li>{product.subCategory}</li>
  //       <li>{product.productName}</li>
  //       <li>{product.size}</li>
  //       <li>{product.description}</li>
  //       <li>{product.productCost}</li>
  //       <button>Add to Cart (displayfn)</button>
  //     </ul>
  //   ));
  // };

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
          {this.state.productList ? (
            this.state.productList.map(product => (
              <ul key={product.id}>
                <li>
                  <h4>{product.productName}</h4>
                </li>
                <li>{product.category}</li>
                <li>{product.subCategory}</li>
                <li>{product.size}</li>
                <li>{product.description}</li>
                <button onClick={this.addToCart} className={`p-${product.id}`}>
                  Add to cart
                </button>
                {console.log(product)}
                {/* when you click the button you will get store the product info in state and then send to order send to cart */}
              </ul>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
