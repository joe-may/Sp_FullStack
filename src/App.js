import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'


class App extends Component {
  ClickedButton = (num) => {
    this.setState((state) => 
    ({selected: num}))
  }
  state = {selected: ''}

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
        <CircleSelector 
        selected={this.state.selected} 
        ClickedButton={this.ClickedButton}
        />
          
          <Circles 
          selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;
