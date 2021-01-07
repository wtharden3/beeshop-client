import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Orders from './Components/Order/Orders';
import ProductsPortal from './Components/Product/ProductsPortal';

//using alias over interfaces //https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0

type AppState = {
  token: string; //took out | undefined;
};

type AppProps = {
  // token: string | undefined;
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      token: '',
    };

    //  this.setToken = this.setToken.bind(this);
    //  this.updateToken = this.updateToken.bind(this);
  }

  setToken = (data: string) => {
    //step 1
    // getItem() from storage
    const localToken = localStorage.getItem('token');
    // step 2
    //check to see if there is an item
    // if (localToken) {
    // }
      localStorage.setItem('token', data);
      this.setState({ token: data });
      console.log(localToken);
    // step 3
    // setItem() -- set the token or local token in the browser
    // step 4
    // set state
  };

  //this needs to go on Navbar
  clearToken = () => {
    this.setState({ token: '' });
  };

  render() {
    // const tokenProps = {token: this.state.token};

    return (
      <div className="App">
        <p>{this.state.token}</p>
        
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
                <Link to="/orders">View Orders</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>Logout</li>
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
            <Route exact path="/orders">
              <Orders token={this.state.token} />
            </Route>
            <Route exact path="/dashboard">
              <ProductsPortal token={this.state.token} />
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
