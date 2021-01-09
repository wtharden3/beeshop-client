import { Component, FormEvent } from 'react';
import APIURL from '../../helpers/environment'

type LoginProps = {
  setToken: (data: string, name: string) => void;
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
      email: 'spender@email.com',
      password: 'pass',
      // token: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('handled it', this.state.email);

    const email: string = this.state.email;
    const password: string = this.state.password;

    const url: string = `${APIURL}/user/login`;
    const bodyObj: object = {
      email,
      password
    }
  console.log(this.props.setToken)
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
      console.log('data.user', data.user.firstName)
      const name = `${data.user.firstName} ${data.user.lastName}`
      this.props.setToken(data.sessionToken, name)
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
