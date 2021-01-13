import { Component, FormEvent} from 'react';
import APIURL from '../../helpers/environment';

type SignUpState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userRole: string;
};

type SignUpProps = {

}

class Signup extends Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userRole: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
      console.log('submit data', data)
      console.log('data.user', data.user)
    });
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="first name"
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <input
            placeholder="last name"
            value={this.state.lastName}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <input
            placeholder="user role - will change"
            value={this.state.userRole}
            onChange={(e) => this.setState({ userRole: e.target.value })}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
