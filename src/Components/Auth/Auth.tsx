import { Component } from 'react';

type AuthProps = {
  props: string;
};

type AuthState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userRole: string;
};

class Auth extends Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userRole: '',
    };
  }
  render(){
    return(

    <div>
      Auth
    </div>
    )
  }
}

export default Auth;
