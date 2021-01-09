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
};

type NavbarState = {
  helper: string;
  viewCart: boolean;
};

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      helper: '',
      viewCart: false,
    };
  }

  toggleCart = (e: MouseEvent): void => {
    e.preventDefault();
    this.setState({ viewCart: !this.state.viewCart });
  };

  render() {
    return (
      <div>
        <div>The Bee Lounge</div>
        <button onClick={this.toggleCart}>
          {' '}
          cart icon button to target view cart
        </button>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Auth</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/orders">View Orders</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>Logout</li>
            </ul>
          </div>
          <hr />
          <Switch>
            <Route exact path="/">
              <Auth setToken={this.props.setToken} />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/orders">
              <Orders token={this.props.token} />
            </Route>
            <Route exact path="/dashboard">
              <ProductsPortal token={this.props.token} />
            </Route>
          </Switch>
        </Router>

        {this.state.viewCart ? <Cart token={this.props.token} /> : null}
      </div>
    );
  }
}

export default Navbar;
