import { Component } from 'react';
import APIURL from '../../helpers/environment';
import { Row, Col, Form, Select, Input, Button } from 'antd';

const { Option } = Select;

type SignUpState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userRole: string;
};

type SignUpProps = {};

class Signup extends Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userRole: 'customer',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect = (value: string) => {
    console.log(`this is the value ${value}`);
    this.setState({ userRole: value });
  };

  handleSubmit = () => {
    //e.preventDefault();
    //fetch and set value
    const firstName: string = this.state.firstName;
    const lastName: string = this.state.lastName;
    const email: string = this.state.email;
    const password: string = this.state.password;
    const userRole: string = this.state.userRole;

    // console.log('this.state.firstName', firstName);
    const url: string = `${APIURL}/user/register`;
    const bodyObj: SignUpState = {
      firstName,
      lastName,
      email,
      password,
      userRole,
    };
    // console.log(url);
    // console.log(bodyObj);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    })
      .then(res => res.json())
      .then(data => {
        console.log('submit data', data);
        console.log('data.user', data.user);
      });
  };

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <Form onFinish={this.handleSubmit}>
          <Row
            style={{ marginLeft: '20px', marginRight: '20px' }}
            justify="space-around"
          >
            <Col span={24}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name!',
                  },
                ]}
              >
                <Input
                  placeholder="first name"
                  value={this.state.firstName}
                  onChange={e => this.setState({ firstName: e.target.value })}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your last name!',
                  },
                ]}
              >
                <Input
                  placeholder="last name"
                  value={this.state.lastName}
                  onChange={e => this.setState({ lastName: e.target.value })}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Email"
                name="signupEmail"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Password"
                name="signupPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="What Experience Do you want?">
                <Select defaultValue="customer" onChange={this.handleSelect}>
                  <Option value="admin">I want to be the Store Owner</Option>
                  <Option value="customer">I want to shop</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* <Form.Item
              label="Admin Password"
              name="userRole"
              rules={[
                {
                  required: false,
                  message: 'Please input your admin password!',
                },
              ]}
            >
              <Input
                type="password"
                placeholder="enter your admin password"
                value={this.state.userRole}
                onChange={e => this.setState({ userRole: e.target.value })}
              />
            </Form.Item> */}
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {' '}
                  {/**onClick={this.handleSubmit} */}
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Signup;
