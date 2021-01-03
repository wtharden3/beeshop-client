import { Component } from 'react';
import Signup from './Signup';



class Auth extends Component<{}, {holder: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      holder: 'placeholder'
    };
  }
  render(){
    return(

    <div>
      <h1>Auth</h1>
      <h2>{this.state.holder}</h2>
      <br />
      <Signup />
    </div>
    )
  }
}

export default Auth;
