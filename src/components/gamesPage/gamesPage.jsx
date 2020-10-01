import React, { Component } from 'react';
import "./gamesPage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class GamesPage extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div class="games" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
          <Router>

          <section>
              

          </section>
              <section>
              <p className="select">PICK A GAME MODE!</p>
             

              
                <div class="storyGame">Nova and the Quest for the Mystic Badges</div>
                <div class="arcadeMode">Arcade mode</div>
                


              </section>
              <section>
             
              </section>
              <section>
              
              </section>
            

          </Router>
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
      </div>
    );
  }
}
  
  export default GamesPage;