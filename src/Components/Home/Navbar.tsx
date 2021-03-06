import { Component, MouseEvent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Auth from '../Auth/Auth';
import Home from './Home';
import Cart from './Cart';
import Orders from '../Order/Orders';
import ProductsPortal from '../Product/ProductsPortal';
import { Button } from 'antd';
import { ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons';

type NavbarProps = {
  token: string;
  name: string;
  setToken: (data: string, name: string) => void;
  clearToken: () => void;
  // addToCart: (e: MouseEvent, arrayOfProducts: Array<CartArrayType>) => void;
};

type NavbarState = {
  //material ui
  anchorEl: null | HTMLElement;
  mobileMoreAnchorEl: null | HTMLElement;
  //end material ui
  helper: string;
  viewCart: boolean;
  //these get passed on to Home and Cart
  cart: Array<CartArrayType>;
  productTotal: string;
  productCostTotal: string;
  prodNames: Array<string>;
  prodCost: Array<number>;
};

type CartArrayType = {
  productName: string;
  productQuantity: number;
  productCost: number;
};

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      helper: '',
      viewCart: false,
      cart: [],
      productTotal: '0',
      productCostTotal: '0',
      prodNames: [],
      prodCost: [],
    };
  }

  toggleCart = (e: MouseEvent): void => {
    e.preventDefault();
    this.setState({ viewCart: !this.state.viewCart });
  };

  //this is passed on to HOMe
  addToCartArr = (products: CartArrayType): void => {
    this.state.cart.push(products);
    console.log('from NAVBAR this.state.cart ===>', this.state.cart);
    //const cartArr = this.state.cart;
    this.state.cart.map(product => {
      this.state.prodNames.push(product.productName);
      this.state.prodCost.push(product.productCost);
    });
    console.log('from NAVBAR - CART=====>', this.state.cart);
    // console.log('prodNames==>', this.state.prodNames)
    // console.log('prodCosts==>', this.state.prodCost)
    // this.setState({cart: arrayOfProducts})
  };

  //this is passed on to HOMe
  updateTotals = (prodCost: number): void => {
    this.setState({ productCostTotal: prodCost.toString() });
  };

  // disPlayCartItems = (): void => {
  //   this.state.cart.length >0 ? this.state.cart.map((item: CartArrayType, index: number) => (<ul key={index}>
  //     <li>{item.productName}</li>
  //     <li>{item.productQuantity}</li>
  //     <li>{item.productCost}</li>
  //   </ul>)) : (<div>Cart is empty</div>)
  // }

  //from MATERIAL UI
  handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  // END MATERIAL UI

  componentDidMount() {
    //console.log('cart[]', this.state.cart);
  }

  //when the compenent is changed
  componentDidUpdate() {
    // console.log('cart[]', this.state.cart);
    // console.log(
    //   'this is on Navbar.tsx. When button to display Cart is clicked "viewCart" state is changed making it so componentWillUpdate is updated'
    // );
    // console.log('from NAVBAR this.state.cart ===>', this.state.cart)
  }

  render() {
    //state
    const {
      cart,
      productTotal,
      viewCart,
      productCostTotal,
    } = this.state;
    //props
    const { name, token, setToken } = this.props;

    //FROM MATERIAL UI
    // const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    // END MATERIAL UI
    return (
      <div>

        <Router>
          <div>
            <ul className="noDecor flex-menu" >
              <li>
                <Link to="/"><h3>The Bee Lounge</h3></Link>
              </li>
        
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login/Signup</Link>
              </li>
              <li>
                <Link to="/orders">View Orders</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Button onClick={this.toggleCart}>
                  shopping Cart{' '}
                  <span className="icons-list">
                    <ShoppingCartOutlined />
                  </span>
                </Button>
              </li>
              <li><Button onClick={this.props.clearToken}>Logout <span className="icons-list"> <LogoutOutlined /></span></Button></li>
            </ul>
          </div>

          <div>
            <h3>{name ? <p>Hello, {name}!</p> : <p>Hello, guest!</p>}</h3>
          </div>

          <div>
            {viewCart ? (
              <Cart
                cart={cart}
                productTotal={productTotal}
                productCostTotal={productCostTotal}
                token={token}
              />
            ) : null}
          </div>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home
                cart={cart}
                addToCartArr={this.addToCartArr}
                updateTotals={this.updateTotals}
              />
            </Route>
            <Route exact path="/login">
              <Auth setToken={setToken} />
            </Route>
            <Route exact path="/orders">
              <Orders token={token} />
            </Route>
            <Route exact path="/dashboard">
              <ProductsPortal token={token} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navbar;
