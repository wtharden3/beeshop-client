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
          <input placeholder="first name" value={this.state.firstName} onChange={(e: any) => this.setState({firstName: e.target.value})}/>
          <input placeholder="last name" value={this.state.lastName} onChange={(e: any) => this.setState({lastName: e.target.value})}/>
          <input type="email" placeholder="email" value={this.state.email} onChange={(e: any) => this.setState({email: e.target.value})}/>
          <input type="password" placeholder="password" value={this.state.password} onChange={(e: any) => this.setState({password: e.target.value})}/>
          <input placeholder="user role - will change" value={this.state.userRole} onChange={(e: any) => this.setState({userRole: e.target.value})}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
