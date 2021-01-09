import { Component, MouseEvent } from 'react';
import Cart from './Cart';

type NavbarProps = {
  token: string;
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
    this.setState({viewCart: !this.state.viewCart});
  };

  render() {
    return (
      <div>
        <div>The Bee Lounge</div>
        <button onClick={this.toggleCart}> cart icon button to target view cart</button>
        {this.state.viewCart ? <Cart token={this.props.token} /> : null }
        
      </div>
    );
  }
}

export default Navbar;
