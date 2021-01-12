import { Component, MouseEvent, DetailedHTMLProps } from 'react';
import APIURL from '../../helpers/environment';
//this is Order Create - the C of the CRUD for Orders
type CartProps = {
  token: string;
  // disPlayCartItems: () => void;
  //below are brought in from NavBar
  productTotal: string;
  productCostTotal: string;
  cart: Array<CartObj>;
  // updateTotals: (prodCount: number, prodCost: number) => void;
};

//object of product
//need a cart

type CartState = {
  totalCost: number;
  totalItems: number;
  cartTotals: Array<CartTotalObj>;
  cartProducts: Array<string>;
  cartCosts: Array<number>;
  cartStateChange: number;
};

type CartObj = {
  productName: string;
  productQuantity: number;
  productCost: number;
};
type CartTotalObj = {
  productName: string;
  productQuantity: number;
  productCost: number;
};

type BodyObj = {
  order: {
    totalCost: number;
    totalItems: number;
  };
};

class Cart extends Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props);
    this.state = {
      totalCost: 0,
      totalItems: this.props.cart.length,
      cartTotals: [],
      cartStateChange: 1,
      cartCosts: [],
      cartProducts: [],
      // token: this.props.token,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  increment = () => {
    this.setState(prevState => ({
      cartStateChange: prevState.cartStateChange + 1,
    }));
  };

  //update totals
  //updateTotals() //params come from home component

  updateCartCost = () => {
    return this.props.cart.map((cartItem: CartObj) => {
      //prodCost.toFixed(2) - for 2 decimal points

      this.state.cartCosts.push(cartItem.productCost);
      const newNum = this.state.cartCosts.reduce((total, num) => {
        return Math.floor(total * 100) / 100 + Math.floor(num * 100) / 100;
      });
      console.log('newNum===>', Math.floor(newNum * 100) / 100); //round to 2 decimal places
      this.setState({ totalCost: Math.floor(newNum * 100) / 100 });
      console.log(this.state.totalCost);
      // return(
      //   <div>
      //     {this.state.totalCost}
      //   </div>
      // )
    });
  };

  // updateCartCost = () => {
  //   this.props.cart.map((cartItem: CartObj) => {
  //           const prodCost = cartItem.productCost + cartItem.productCost;
  //           return this.setState({totalCost: prodCost});
  // },}

  handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const url: string = `${APIURL}/orders/placeorder`;
    const bodyObj: BodyObj = {
      order: {
        totalCost: this.state.totalCost,
        totalItems: this.state.totalItems,
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
        // console.log('hello again mark');
        console.log('data - Order was placed ===>', data.order);
        //map through data
        // if (data.order.length === 0) {
        //   data.order.map((item: CartObj) => console.log(item));
        //   console.log('something was added to the cart. CART');
        //   this.increment();
        //   console.log(this.props.cart);
        // }

        //do a map to add productName to the cartProductNames
        //in that same map add all cost to the cartProductCost
        //do an array methods to account the amout of products .length
        //find a way to add the totals of all totals in the cartProductCost Array

        //set the total cost and set the totalItems
        //
      })
      .catch(err => console.log(err));
  };

  componentDidUpdate() {
    // when this.state.cart
    // console.log('now I want to return the cart mapper. We are on CART');
    // this.props.cart.map((item: CartObj, index: number) => (
    //   <ul key={index}>
    //     <li>{item.productName}</li>
    //     <li>{item.productQuantity}</li>
    //     <li>{item.productCost}</li>
    //   </ul>
    // ));
  }

  render() {
    return (
      <div>
        <p>This will later be a modal or a pop out of some kind</p>
        <h2>Cart</h2>
        <p>here are your cart details, click below to place your order</p>
        <div>
          {/* <p>
            there should be a button from the store display that allows you to
            add to cart array cart array should be displayed here using map
          </p> */}
          {/* <div>{this.displayCartItems()}</div> */}
          <div>
            {this.props.cart.length > 0 ? (
              this.props.cart.map((item: CartObj, index: number) => (
                <ul key={index}>
                  <li>{item.productName}</li>
                  <li>{item.productQuantity}</li>
                  <li>{item.productCost}</li>
                </ul>
              ))
            ) : (
              <div>Cart is empty</div>
            )}
          </div>
          <button onClick={this.updateCartCost}>click for cost</button>
          <div>You have {this.props.cart.length} items in your cart</div>
          <div>You have {this.state.totalItems} items in your cart</div>
          <div>
            {this.state.totalCost} is the total cost of the items in your cart
          </div>
        </div>

        <button onClick={this.handleClick}>Place Order</button>
      </div>
    );
  }
}

export default Cart;
