import { Component } from 'react';
import './App.css';
import Navbar from './Components/Home/Navbar';

//using alias over interfaces //https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0

type AppState = {
  token: string; //took out | undefined;
  name: string;
};

type AppProps = {
  // token: string | undefined;
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      token: '',
      name: ''
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
    localStorage.setItem('token', '');
    this.setState({ token: '' });
    console.log('cleartoken', localToken);
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.name ? (<p>Hello, {this.state.name}!</p>): (<p>Hello, guest!</p>)}</p>
        <Navbar
          token={this.state.token}
          name={this.state.name}
          setToken={this.setToken}
          clearToken={this.clearToken}
        />
      </div>
    );
  }
}

export default App;
