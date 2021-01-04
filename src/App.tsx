import { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth'

//using alias over interfaces //https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0


// type AppProps = {
//   token: string;
// }

type AppState = {
  token: string
}

class App extends Component<{}, AppState> {
  constructor(props: any){
    super(props);
    this.state = {
      token: 'test token'
    }
  }
  render(){
    const tokenProps ={token: this.state.token}
    
  return (
    <div className="App">
      <header className="App-header">
        The Bee Lounge
        <p>{this.state.token}</p>
        <hr />
        <Auth {...tokenProps}/>
        <hr />
        <Home />
      </header>
    </div>
  )

  }
}

export default App;
