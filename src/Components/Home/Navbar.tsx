import { Component, MouseEvent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Auth from '../Auth/Auth';
import Home from './Home';
import Cart from './Cart';
import Orders from '../Order/Orders';
import ProductsPortal from '../Product/ProductsPortal';

type NavbarProps = {
  token: string;
  name: string;
  setToken: (data: string, name: string) => void;
  clearToken: (data: string) => void;
  // addToCart: (e: MouseEvent, arrayOfProducts: Array<CartArrayType>) => void;
};

type NavbarState = {
  helper: string;
  viewCart: boolean;
  cart: Array<CartArrayType>;
};

type CartArrayType ={
  productName: string;
  productQuantity: number;
  productCost: number;
}

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      helper: '',
      viewCart: false,
      cart: [],
    };
  }

  toggleCart = (e: MouseEvent): void => {
    e.preventDefault();
    this.setState({ viewCart: !this.state.viewCart });
  };

  addToCart = (products: CartArrayType): void => {
    this.state.cart.push(products)
    // this.setState({cart: arrayOfProducts})
  }

  render() {
    return (
      <div>
        <div>The Bee Lounge</div>
        <Router>
          <div>
            <ul>
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
                <button onClick={this.toggleCart}>
                  cart icon button to target view cart
                </button>
              </li>
              <li>Logout</li>
            </ul>
          </div>
          <div>
            <p>
              {this.props.name ? (
                <p>Hello, {this.props.name}!</p>
              ) : (
                <p>Hello, guest!</p>
              )}
            </p>
          </div>

          <div>
            {this.state.viewCart ? <Cart token={this.props.token} /> : null}
          </div>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home addToCart={this.addToCart} />
            </Route>
            <Route exact path="/login">
              <Auth setToken={this.props.setToken} />
            </Route>
            <Route exact path="/orders">
              <Orders token={this.props.token} />
            </Route>
            <Route exact path="/dashboard">
              <ProductsPortal token={this.props.token} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navbar;
