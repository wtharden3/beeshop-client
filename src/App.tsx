import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
    this.setState({ token: data });
  };

  //this needs to go on Navbar
  clearToken = () => {
    this.setState({ token: undefined });
  };

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
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Auth</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                Logout
              </li>
            </ul>
          </div>
          <hr />
          <Switch>
            <Route exact path="/">
              <Auth setToken={this.setToken} />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>

        {/* <header className="App-header">
          The Bee Lounge
          <hr />
          <h1>{this.state.token}</h1>
          <Auth setToken={this.setToken} />
          {/* when property is an issue need to go to Auth to set type*/}
        {/*<hr />
          <Home />
        </header> */}
      </div>
    );
  }
}

export default App;
