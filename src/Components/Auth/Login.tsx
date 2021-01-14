import { Component } from 'react';
import APIURL from '../../helpers/environment';
// import Button from '@material-ui/core/Button';
// import { Alert } from 'antd';
import { message, Form, Input, Button, Row, Col } from 'antd';

type LoginProps = {
  setToken: (data: string, name: string) => void;
  showForAdmin: (userRole: string) => void;
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

  success = () => {
    message.success('You have successfully Logged in');
  };

  error = () => {
    message.error('Please try again');
  };

  warning = () => {
    message.warning('This is a warning message');
  };

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
        console.log('data.user.userRole', data.user.userRole);
        this.props.showForAdmin(data.user.userRole)
        const name = `${data.user.firstName} ${data.user.lastName}`;
        this.props.setToken(data.sessionToken, name);
        this.success();
      })
      .catch(err => {
        console.log(err);
        this.error();
      })
  };

  render() {
    // const token: React.ReactNode = this.props.children;
    return (
      <div>
        <h2>Login</h2>
        <Form initialValues={{ remember: true }} onFinish={this.handleSubmit} onFinishFailed={this.error}>
          <Row
            style={{ marginLeft: '20px', marginRight: '20px' }}
            justify="space-around"
          >
            <Col xs={24}>
              <Form.Item
                label="Email"
                name="loginEmail"
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
                name="loginPassword"
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
                <Button type="primary" onClick={this.handleSubmit}>Login</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Login;
