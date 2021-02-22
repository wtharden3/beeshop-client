import { Component, FormEvent, MouseEvent } from 'react';
import APIURL from '../../helpers/environment';
import { Row, Col, Form, Select, Input, Button } from 'antd';

const { Option } = Select;

type ProductCreateProps = {
  token: string;
  getProducts: (e: MouseEvent | FormEvent) => void;
  // handleProNameChange: (e: FormEvent<HTMLInputElement>) => void;
};

type ProductCreateState = {
  product: {
    productName: string;
    description: string;
    category: string;
    subCategory: string;
    productCost: string;
    size: string;
  };
};

class ProductCreate extends Component<ProductCreateProps, ProductCreateState> {
  constructor(props: ProductCreateProps) {
    super(props);
    this.state = {
      product: {
        productName: '',
        description: '',
        category: '',
        subCategory: '',
        productCost: '',
        size: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleProNameChange = this.handleProNameChange(this);
  }

  // handleChange = (e: FormEvent, stateKey: ReactNode, stateValue: string | number): void => {
  //   this.setState({stateKey: stateValue})
  // }

  handleNameChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: e.currentTarget.value, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    });
  };

  handleDescriptionChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: e.currentTarget.value,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    });
  };

  handleCategoryChange = (value: string): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: value,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    });
  };

  handleProdSubcategoryChange = (value: string): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: value,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    });
  };

  handleProductCostChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: e.currentTarget.value,
        size: this.state.product.size,
      },
    });
  };

  handleSizeChange = (value: string): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: value,
      },
    });
  };

  handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // this.props.getProducts(e);
    //this.props.getProducts()
    const url: string = `${APIURL}/products/addtoinventory`;
    const bodyObj: ProductCreateState = {
      product: {
        productName: this.state.product.productName,
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    };

    console.log('bodyObj --> ', bodyObj)

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
        console.log(data);
        //added this for auto update of product list
        this.props.getProducts(e);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Add a Product</h2>
        <Form onFinish={this.handleSubmit}>
          <Row
            style={{ marginLeft: '20px', marginRight: '20px' }}
            justify="space-around"
          >
            <Col span={24}>
              <Form.Item label="Product Name" name="createProductName">
                <Input
                  type="text"
                  value={this.state.product.productName}
                  onChange={this.handleNameChange}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Product Description" name="createDescription">
                <Input
                  type="text"
                  placeholder="Product Description"
                  value={this.state.product.description}
                  onChange={this.handleDescriptionChange}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Product Category" name="createCategory">
                <Select
                  // defaultValue="tops"
                  onChange={this.handleCategoryChange}
                >
                  <Option value="tops">tops</Option>
                  <Option value="bottoms">bottoms</Option>
                  <Option value="accessories">accessories</Option>
                  <Option value="footwear">footwear</Option>
                  <Option value="sleepwear">sleepwear</Option>
                  <Option value="intimates">intimates</Option>
                </Select>
                {/* <Input
                  type="text"
                  placeholder="Product Category"
                  value={this.state.product.category}
                  onChange={this.handleCategoryChange}
                /> */}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Subcategory" name="createSubCategory">
                <Select
                  // defaultValue="tees"
                  onChange={this.handleProdSubcategoryChange}
                >
                  <Option value="sweatshirts">sweatshirts</Option>
                  <Option value="hoodies">hoodies</Option>
                  <Option value="tees">tees</Option>
                  <Option value="leggings">leggings</Option>
                  <Option value="joggers">joggers</Option>
                  <Option value="shorts">shorts</Option>
                  <Option value="jewelry">jewelry</Option>
                  <Option value="socks">socks</Option>
                  <Option value="shoes">shoes</Option>
                  <Option value="boots">boots</Option>
                  <Option value="hats">hats</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Product Cost" name="createCost">
                <Input
                  type="number"
                  value={this.state.product.productCost}
                  onChange={this.handleProductCostChange}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Select Product Size" name="createSize">
                <Select 
                // defaultValue="large" 
                onChange={this.handleSizeChange}>
                  <Option value="xsmall">XS</Option>
                  <Option value="small">small</Option>
                  <Option value="medium">medium</Option>
                  <Option value="large">large</Option>
                  <Option value="xlarge">XL</Option>
                  <Option value="2x">2x</Option>
                  <Option value="3x">3x</Option>
                  <Option value="4x">4x</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {/* <Button  onClick={this.props.getProducts}>
          Show updated Product List
        </Button> */}
      </div>
    );
  }
}

export default ProductCreate;
