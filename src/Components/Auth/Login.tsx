import { Component } from 'react';
import APIURL from '../../helpers/environment'

type LoginProps = {
  setToken: (data: string) => void;
}  
type LoginState = {
  // token: string;
  email: string;
  password: string;
};

class Login extends Component<LoginProps, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: 'youremail@email.com',
      password: '',
      // token: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('handled it', this.state.email);

    const email: string = this.state.email;
    const password: string = this.state.password;

    const url: string = `${APIURL}/user/login`;
    const bodyObj: object = {
      email,
      password
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    })
    .then(res => res.json())
    .then(data => {
      console.log('submit data', data)
      console.log('data.user', data.user)
      this.props.setToken(data.sessionToken)
    })
  };

  render() {
    // const token: React.ReactNode = this.props.children;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={(e: any) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e: any) => this.setState({ password: e.target.value })}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
