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
          <input placeholder="email" value={this.state.email} />
          <input placeholder="password" value={this.state.password} />
        </form>
      </div>
    )
  }
}

export default Login;