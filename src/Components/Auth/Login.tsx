import {Component} from 'react';

type LoginState = {
  email: string;
  password: string;
}

class Login extends Component<{}, LoginState>{
  constructor(props: any){
    super(props);
    this.state ={
      email: '',
      password: ''
    }
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="email" value={this.state.email} onChange={(e: any) => this.setState({email: e.target.value})}/>
          <input type="password" placeholder="password" value={this.state.password} onChange={(e: any) => this.setState({password: e.target.value})}/>
        </form>
      </div>
    )
  }
}

export default Login;