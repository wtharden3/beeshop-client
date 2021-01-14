import { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

type AuthProps = {
  setToken: (data: string, name: string) => void;
  showForAdmin: (userRole: string) => void;
};

type AuthState = {
  // token: string | undefined;
  holder: string;
};

class Auth extends Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      holder: 'placeholder',
    };
  }
  render() {
    //const tokenProps = {token: this.state.token}
    //const token: React.ReactNode = this.props.children;
    const {showForAdmin, setToken} = this.props;
    return (
      <div style={{marginLeft: '20px', marginRight: '20px'}}>
        {/* <h1>Login / Sign up</h1> */}
        {/* <h2>{this.state.holder}</h2> */}

        <Tabs defaultActiveKey="1">
          <TabPane tab="Login" key="1">
            <Login showForAdmin={showForAdmin} setToken={setToken} /> {/* {...tokenProps}*/}
          </TabPane>

          <TabPane tab="Signup" key="2">
            <Signup />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Auth;
