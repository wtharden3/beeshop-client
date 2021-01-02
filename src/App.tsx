import { Component } from 'react';
import './App.css';
import Auth from './Components/Auth/Auth'

//using alias over interfaces //https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0
type AppState = {
  token: string
}

class App extends Component<{}, AppState> {
  constructor(props: any){
    super(props);
    this.state = {
      token: ''
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        The Bee Lounge -dev
        <hr />
        {/* <Auth token={this.state.token}/> */}
      </header>
    </div>
  )

  }
}

export default App;
