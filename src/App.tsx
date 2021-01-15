import { Component } from 'react';
import './App.css';
import Navbar from './Components/Home/Navbar';

//using alias over interfaces //https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0

type AppState = {
  token: string; //took out | undefined;
  name: string;
  isAdmin: boolean;
};

type AppProps = {
  // token: string | undefined;
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      token: '',
      name: '',
      isAdmin: false
    };

    //  this.setToken = this.setToken.bind(this);
    //  this.updateToken = this.updateToken.bind(this);
  }

  setToken = (data: string, name: string) => {
    const localToken = localStorage.getItem('token');
    localStorage.setItem('token', data);
    this.setState({ token: data, name: name });
    console.log('settoken', localToken);
  };

  //this needs to go on Navbar
  clearToken = () => {
    const localToken = localStorage.getItem('token');
    localStorage.setItem('token', 'undefined');
    this.setState({ token: 'undefined' });
    console.log('cleartoken', localToken);
  };

  showForAdmin = (userRole: string) => {
    if(userRole === 'admin'){
      this.setState({isAdmin: true})
    } else {
      this.setState({isAdmin: false})
    }
  } 

  render() {
    //state - so we don't have to keep typing 'this.state.token' for  example
    const {token, name, isAdmin } = this.state;
    //props - methods
    const {setToken, clearToken, showForAdmin} = this;
    return (
      <div className="App">
        
        <Navbar
          token={token}
          name={name}
          setToken={setToken}
          clearToken={clearToken}
          showForAdmin={showForAdmin}
          isAdmin={isAdmin}
        />
      </div>
    );
  }
}

export default App;
