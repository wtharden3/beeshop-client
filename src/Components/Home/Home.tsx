import { Component, MouseEvent } from 'react';
import APIURL from '../../helpers/environment';
import { Row, Col, Button } from 'antd';

type HomeProps = {
  addToCartArr: (products: CartObj) => void;
  updateTotals: (prodCount: number, prodCost: number) => void;
  cart: Array<CartObj>;
  //   displayProducts: () => React.ReactNode;
  //classes: PropTypes.object.isRequired,
};

type Products = {
  message: string;
  productList: Array<Productobj>;
  product: {
    productName: string;
    productQuantity: number;
    productCost: number;
  };
  stateChange: number;
  productNames: Array<string>;
  productCosts: Array<number>;
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
      product: {
        productName: '',
        productQuantity: 0,
        productCost: 0,
      },
      stateChange: 0,
      productNames: [],
      productCosts: [],
    };

    // this.displayProducts = this.displayProducts.bind(this)
  }

  addToCart = (e: MouseEvent): void => {
    e.preventDefault();
    //get the value of the className that contains the product id
    const classValue = e.currentTarget.classList.value;
    //turns the string into and array based on spaces
    const idNumArr = classValue.split('');
    //idNum.splice(0,2) removes 'p-'
    idNumArr.splice(0, 2);
    //that leaves idNum => which just leavs the id number
    //now I need to join the array to become a string again
    const idNum = idNumArr.toString();
    //fetch using idNum for :productid
    fetch(`${APIURL}/products/${idNum}`, {
      method: 'GET',
      headers: new Headers({ 'Content-type': 'application/json' }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('THIS IS DATA FROM ADDPRODUCT', data);
        console.log(data.product.productName);
        this.setState({
          product: {
            productName: data.product.productName,
            productQuantity: 1,
            productCost: data.product.productCost,
          },
        });

        console.log('this.state.product ', this.state.product);
        this.props.addToCartArr(this.state.product);
        console.log('cartArr', this.props.cart);
        // this.setState({ stateChange: this.state.stateChange + 1 });
      })
      .catch(err => console.log(err));
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
        this.setState({ productList: data.products });
        this.setState({ message: data.message });
        //console.log('from HOME productList', this.state.productList);
      });
  }

  componentDidUpdate() {
    // console.log('from HOME productList---update', this.state.productList);
    // console.log('from HOME productList---update', this.state.productList[0]);
    // console.log('PROPS CART',this.props.cart);
    // const cartArr = this.props.cart;
    // cartArr.map(product => {
    //   this.state.productNames.push(product.productName);
    //   this.state.productCosts.push(product.productCost); //already a number
    // });
    // //push product.productName into array productNames
    // //push product.productCost into array productCosts
    // console.log('productNames Array===>', this.state.productNames);
    // console.log('productNames.lengths Array===>', this.state.productNames);
    // console.log('productCosts Array===>', this.state.productCosts);
    // //this.setState({})
    // console.log('there was a change on the Home page');
  }

  render() {
    return (
      <div>
        Home
        <h1>Home Page!</h1>
        {/* <h2>{this.state.products.productName}</h2> */}
        <p>{this.state.message}</p>
        <div>
          <Row>
              {this.state.productList ? (
                this.state.productList.map(product => (
            <Col xs={24} sm={12}>
                  <ul className="noDecor" key={product.id}>
                    <li>
                      <h4>{product.productName}</h4>
                    </li>
                    <li>{product.category}</li>
                    <li>{product.subCategory}</li>
                    <li>{product.size}</li>
                    <li>{product.description}</li>
                    <li>{product.productCost}</li>
                    <Button type="primary"
                      onClick={this.addToCart}
                      className={`p-${product.id}`}
                    >
                      Add to cart
                    </Button>
                    {console.log(product)}
                    {/* when you click the button you will get store the product info in state and then send to order send to cart */}
                    <hr />
                  </ul>
            </Col>
                ))
              ) : (
                <div></div>
              )}
          </Row>
        </div>
      </div>
    );
  }
}

// Home.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Home;
