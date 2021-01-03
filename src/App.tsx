import { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
//import Auth from './Components/Auth/Auth'

//using alias over interfaces //https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0


// type AppProps = {
//   token: string;
// }

// type AppState = {
//   token: string
// }

class App extends Component<{}, {}> {
  constructor(props: any){
    super(props);
    this.state = {
      token: 'ball'
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        The Bee Lounge
        <hr />
        {/* <Auth /> */}
        <Home />
      </header>
    </div>
  )

  }
}

export default App;
