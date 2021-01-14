import { Component, FormEvent } from 'react';
import APIURL from '../../helpers/environment';
// import Button from '@material-ui/core/Button';
// import { Alert } from 'antd';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

type LoginProps = {
  setToken: (data: string, name: string) => void;
};

type LoginState = {
  // token: string;
  email: string;
  password: string;
};

class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: 'boss@email.com',
      password: 'pass',
      // token: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showSuccessFeedback = () => {
    // return (
    //   <Alert
    //     message="Success Text"
    //     description="You Successfully Logged in!"
    //     type="success"
    //   />
    // );
  };

  handleSubmit = () => {
    //e.preventDefault();
    console.log('handled it', this.state.email);

    const email: string = this.state.email;
    const password: string = this.state.password;

    const url: string = `${APIURL}/user/login`;
    const bodyObj: object = {
      email,
      password,
    };
    console.log(this.props.setToken);
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
        console.log('data.user', data.user.firstName);
        const name = `${data.user.firstName} ${data.user.lastName}`;
        this.props.setToken(data.sessionToken, name);
        this.showSuccessFeedback();
      });
  };

  render() {
    // const token: React.ReactNode = this.props.children;
    return (
      <div>
        <h2>Login</h2>
        <Form onFinish={this.handleSubmit}>
          <Row
            style={{ marginLeft: '20px', marginRight: '20px' }}
            justify="space-around"
          >
            <Col xs={24}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email' }]}
              >
                <Input
                  type="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={(e: any) =>
                    this.setState({ email: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password!',
                  },
                ]}
              >
                <Input
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={(e: any) =>
                    this.setState({ password: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button type="primary">
                  Login
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Login;
