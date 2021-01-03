import { Component } from 'react';

type SignUpState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userRole: string;
};

class Signup extends Component<{}, SignUpState> {
  constructor(props: any) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userRole: '',
    };
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form>
          <input placeholder="first name" value={this.state.firstName} />
          <input placeholder="last name" value={this.state.lastName} />
          <input placeholder="email" value={this.state.email} />
          <input placeholder="password" value={this.state.password} />
          <input placeholder="user role - will change" value={this.state.userRole} />
        </form>
      </div>
    );
  }
}

export default Signup;
