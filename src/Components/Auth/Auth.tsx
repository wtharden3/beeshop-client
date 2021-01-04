import { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

type AuthProps = {
  setToken: (data: string) => void;
}

type AuthState = {
  // token: string | undefined;
  holder: string;
}

class Auth extends Component<AuthProps, AuthState> {
  constructor(props: any) {
    super(props);
    this.state = {
      holder: 'placeholder'
    };
  }
  render() {
    //const tokenProps = {token: this.state.token}
    //const token: React.ReactNode = this.props.children;
    return (
      <div>
        <h1>Auth</h1>
        <h2>{this.state.holder}</h2>
        <br />
        <Signup />
        <br />
        <Login setToken={this.props.setToken} /> {/* {...tokenProps}*/}
      </div>
    );
  }
}

export default Auth;
