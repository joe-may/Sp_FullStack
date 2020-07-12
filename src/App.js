import React, { Component } from "react";
import { render } from "react-dom";


import { BrowserRouter as Router, Route} from "react-router-dom";

import'./App.css'
import GameTwo from './components/gameTwo/gameTwo';
import GameOne from './components/gameOne/gameOne';





class App extends Component {
  componentDidMount() {
    // $("button").click(function() {
    //   $("h1").toggleClass("red");
    // });
  }
  render() {
    return (
      <Router>
      <section>
          <Route exact path="/1" render={(props) => (
              <GameOne
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/2" render={(props) => (
              <GameTwo
                />
                )}/>
      </section>
      </Router>
    );
    
  }
 
}


export default App;






// class App extends Component {
//   ClickedButton = (num) => {
//     this.setState((state) => 
//     ({selected: num}))
//   }
//   state = {selected: ''}



//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
//         <main>
//         <CircleSelector 
//         selected={this.state.selected} 
//         ClickedButton={this.ClickedButton}
//         />
          
//           <Circles 
//           selected={this.state.selected}/>
//         </main>
//       </div>
//     );
//   }
// }

// export default App;
