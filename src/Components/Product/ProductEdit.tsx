import { Component, FormEvent, MouseEvent } from 'react';
import APIURL from '../../helpers/environment';
import { Row, Col, Form, Select, Input, Button } from 'antd';

const { Option } = Select;

type ProductEditProps = {
  token: string;
  id: number;
  productCost: string;
  productName: string;
  description: string;
  category: string;
  subCategory: string;
  // id: number;
  size: string;
  getProducts: (e: MouseEvent | FormEvent) => void;
};

type ProductEditState = {
  productid: number;
  product: {
    productName: string;
    productCost: string;
    description: string;
    category: string;
    subCategory: string;
    // id: number;
    size: string;
  };
};

type BodyObj = {
  product: {
    productName: string;
    productCost: string;
    description: string;
    category: string;
    subCategory: string;

    size: string;
  };
};

class ProductEdit extends Component<ProductEditProps, ProductEditState> {
  constructor(props: ProductEditProps) {
    super(props);
    this.state = {
      productid: this.props.id,
      product: {
        productName: this.props.productName,
        productCost: this.props.productCost,
        description: this.props.description,
        category: this.props.category,
        subCategory: this.props.subCategory,
        // id: 0,
        size: this.props.size,
      },
    };
  }

  handleEditNameChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: e.currentTarget.value, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditDescriptionChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: e.currentTarget.value,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditCategoryChange = (value: string): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: value,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditProdSubcategoryChange = (value: string): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: value,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditproductCostChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: e.currentTarget.value,
        // id: this.state.product.id,
        size: this.state.product.size,
      },
    });
  };

  handleEditSizeChange = (value: string): void => {
    this.setState({
      product: {
        productName: this.state.product.productName, //currentTarget vs target
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        // id: this.state.product.id,
        size: value,
      },
    });
  };

  handleEditSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const productid: number = this.state.productid;
    const url: string = `${APIURL}/products/edit/${productid}`;
    const bodyObj: BodyObj = {
      product: {
        productName: this.state.product.productName,
        description: this.state.product.description,
        category: this.state.product.category,
        subCategory: this.state.product.subCategory,
        productCost: this.state.product.productCost,
        size: this.state.product.size,
      },
    };

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(bodyObj),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.props.getProducts(e);
        })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        this will be a modal or pop out
        <h2>Product Edit</h2>
        <Form onFinish={this.handleEditSubmit}>
          <Row
            style={{ marginLeft: '20px', marginRight: '20px' }}
            justify="space-around"
          >
            <Col span={24}>
              <Form.Item label="Product Name" name="editProductName">
                <Input
                  type="text"
                  value={this.state.product.productName}
                  onChange={this.handleEditNameChange}
                />
              </Form.Item>
            </Col>

            {/* <Input
            type="text"
            value={this.state.product.productName}
            onChange={this.handleEditNameChange}
          /> */}
            <Col span={24}>
              <Form.Item label="Product Description" name="editDescription">
                <Input
                  type="text"
                  value={this.state.product.description}
                  onChange={this.handleEditDescriptionChange}
                />
              </Form.Item>
            </Col>
            {/* <input
            type="text"
            placeholder="Product Description"
            value={this.state.product.description}
            onChange={this.handleEditDescriptionChange}
          /> */}
            <Col span={24}>
              <Form.Item label="Product Category" name="editCategory">
                <Select
                  defaultValue={this.state.product.category}
                  onChange={this.handleEditCategoryChange}
                >
                  <Option value="tops">tops</Option>
                  <Option value="bottoms">bottoms</Option>
                  <Option value="accessories">accessories</Option>
                  <Option value="footwear">footwear</Option>
                  <Option value="sleepwear">sleepwear</Option>
                  <Option value="intimates">intimates</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* <input
            type="text"
            placeholder="Product Category"
            value={this.state.product.category}
            onChange={this.handleEditCategoryChange}
          /> */}
            <Col span={24}>
              <Form.Item label="Subcategory" name="editSubCategory">
                <Select
                  defaultValue={this.state.product.subCategory}
                  onChange={this.handleEditProdSubcategoryChange}
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
            {/* <input
              type="text"
              placeholder="Product subcategory"
              value={this.state.product.subCategory}
              onChange={this.handleEditProdSubcategoryChange}
            /> */}
            <Col span={24}>
              <Form.Item label="Product Cost" name="editCost">
                <Input
                  type="number"
                  value={this.state.product.productCost}
                  onChange={this.handleEditproductCostChange}
                />
              </Form.Item>
            </Col>
            {/* <input
              type="number"
              placeholder="Product productCost"
              value={this.state.product.productCost}
              onChange={this.handleEditproductCostChange}
            /> */}
            <Col span={24}>
              <Form.Item label="Select Product Size" name="editSize">
                <Select defaultValue={this.state.product.size} onChange={this.handleEditSizeChange}>
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
            {/* <input
              type="text"
              placeholder="Product Size"
              value={this.state.product.size}
              onChange={this.handleEditSizeChange}
            /> */}
            <Col span={24}>
              <Form.Item>
                <Button type="primary" onClick={this.handleEditSubmit}>
                  Submit
                </Button>
              </Form.Item>
            </Col>
            {/* <Button type="primary" onClick={this.handleEditSubmit}>
              Submit
            </Button> */}
          </Row>
        </Form>
      </div>
    );
  }
}

//plant.append('image', this.state.plantImg)
//must you append() because it's form-data

export default ProductEdit;
