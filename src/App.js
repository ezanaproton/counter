import './App.css';
import CardList from './CardList'
import '../node_modules/tachyons/css/tachyons.min.css';
import { Component } from 'react';
import { ThemeContext } from './ThemeContext.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      darkorlight: "Light"
    }
  }

  theme = () =>{
    if(this.state.darkorlight === 'Dark'){
      this.setState({darkorlight: 'Light'});
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      return;
    }
    document.body.style.backgroundColor = "#282828";
    document.body.style.color = "white";
    this.setState({darkorlight: 'Dark'});
  }

  render(){
  return (
    <div className="App">
      <h1 className="f1">Counter App</h1>
      <button onClick={this.theme}>{this.state.darkorlight === "Dark"? "Light":"Dark"} Mode</button>
      <ThemeContext.Provider value={{...this.state, setTheme: this.theme}}>
        <CardList/>
      </ThemeContext.Provider>
    </div>
  );}
}

export default App;
