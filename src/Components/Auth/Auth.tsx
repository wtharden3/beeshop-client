import { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import { Row, Col } from 'antd';

type AuthProps = {
  setToken: (data: string, name: string) => void;
};

type AuthState = {
  // token: string | undefined;
  holder: string;
};

class Auth extends Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      holder: 'placeholder',
    };
  }
  render() {
    //const tokenProps = {token: this.state.token}
    //const token: React.ReactNode = this.props.children;
    return (
      <div>
        <h1>Login / Sign up</h1>
        {/* <h2>{this.state.holder}</h2> */}
        <Row
          style={{ marginLeft: '20px', marginRight: '20px' }}
          justify="space-around"
        >
          <Col xs={24} sm={12}>
            <Signup />
          </Col>
          <Col xs={24} sm={12}>
            <Login setToken={this.props.setToken} /> {/* {...tokenProps}*/}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Auth;
