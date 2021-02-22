import { Component, FormEvent, MouseEvent } from 'react';
import ProductCreate from './ProductCreate';
import ProductEdit from './ProductEdit';
import APIURL from '../../helpers/environment';
import ProductDelete from './ProductDelete';

type ProductsPortalProps = {
  token: string;
  showForAdmin: (userRole: string) => void;
};

type ProductsPortalPortState = {
  // token: string;
  header: string;
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
};

class ProductsPortal extends Component<
  ProductsPortalProps,
  ProductsPortalPortState
> {
  constructor(props: ProductsPortalProps) {
    super(props);
    this.state = {
      header: 'Products Portal',
      message: '',
      productList: [],
    };
  }

  getProducts = (e: MouseEvent | FormEvent<EventTarget>): void => {
    e.preventDefault();
    fetch(`${APIURL}/products/inventory`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data ===> ', data);
        if (data.products) {
          this.setState({ productList: data.products });
          this.setState({ message: data.message });
          console.log('you should see some products! 👀 ');
        } else {
          console.log('no data to display');
        }
      });
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
        console.log(data);
        this.setState({ productList: data.products });
        this.setState({ message: data.message });
      });
  }

  //edit fNs

  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        {/* display products*/}
        <ProductCreate
          getProducts={this.getProducts}
          token={this.props.token}
        />
        <br />
        <br />
        <hr />
        <h2>Current Products</h2>
        <div>
          {/** make this its own component - call anywhere - or copy paste in another */}
          {this.state.productList ? (
            this.state.productList.map(product => (
              <ul className="noDecor" key={product.id}>
                <li>
                  <h4>{product.productName}</h4>
                </li>
                <li>{product.productCost}</li>
                <li>{product.category}</li>
                <li>{product.subCategory}</li>
                <li>{product.size}</li>
                <li>{product.description}</li>
                <ProductEdit
                  size={product.size}
                  subCategory={product.subCategory}
                  category={product.category}
                  description={product.description}
                  productName={product.productName}
                  productCost={product.productCost}
                  id={product.id}
                  token={this.props.token}
                  getProducts={this.getProducts}
                />
                <br />
                <ProductDelete getProducts={this.getProducts} id={product.id} token={this.props.token} />
                <br />
                <hr />
              </ul>
            ))
          ) : (
            <div>There are no products to display</div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductsPortal;
