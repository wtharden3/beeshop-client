import { Component } from 'react';

// type AuthProps = {
//   props: any;
// };

type AuthState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userRole: string;
};

class Auth extends Component<{token: string}, AuthState> {
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
  render(){
    return(

    <div>
      Auth
    </div>
    )
  }
}

export default Auth;
