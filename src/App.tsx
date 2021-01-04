import { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';

//using alias over interfaces //https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0

// type AppProps = {
//   token: string;
// }

type AppState = {
  token: string | undefined;
};

// type AppProps = {
//   setToken: any;
//   updateToken: any;
// };

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      token: '',
    };

    //  this.setToken = this.setToken.bind(this);
    //  this.updateToken = this.updateToken.bind(this);
  }

  setToken = (data: string) => {
    this.setState({token: data})
  }

  clearToken = () => {
    this.setState({token: undefined})
  }

  render() {
    // const token: string | undefined = this.state.token;

    // const setToken = (data: string) => {
    //   this.setState({ token: data });
    // };

    // const updateToken = () => {
    //   this.setState({ token: undefined });
    // };
    // const tokenProps = [token, setToken, updateToken];

    return (
      <div className="App">
        <header className="App-header">
          The Bee Lounge
          <hr />
          <h1>{this.state.token}</h1>
          <Auth setToken={this.setToken}/> {/* when property is an issue need to go to Auth to set type*/}
          <hr />
          <Home />
        </header>
      </div>
    );
  }
}

export default App;
