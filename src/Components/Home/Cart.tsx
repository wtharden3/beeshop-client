import { Component, MouseEvent} from 'react';
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
  cartCosts: Array<string>;
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
      totalItems: 0,
      cartTotals: [],
      cartStateChange: 1,
      cartCosts: [],
      cartProducts: [],
      // token: this.props.token,
    };

    this.handleClick = this.handleClick.bind(this);
  }

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
        console.log('data', data.order);
        //map through data
        data.order.map((item: CartObj) => console.log(item))
        console.log('something was added to the cart. CART');
        this.setState({ cartStateChange: this.state.cartStateChange + 1 });
        console.log(this.props.cart);
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
          
        </div>

        <button onClick={this.handleClick}>Place Order</button>
      </div>
    );
  }
}

export default Cart;
