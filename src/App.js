import React, { Component } from "react";
import { render } from "react-dom";


import { BrowserRouter as Router, Route} from "react-router-dom";

import'./App.css'

import BossBattleSno from './components/bossBattleSno/bossBattleSno';
import GameTwo from './components/gameTwo/gameTwo';
import GameOne from './components/gameOne/gameOne';
import GameThree from './components/gameThree/gameThree';
import GameFour from './components/gameFour/gameFour';
import GamesPage from './components/gamesPage/gamesPage';
import SnowCon from './components/snowconPage/snowconPage';
import SnowConb1 from './components/snowconPageb1/snowconPageb1';
import SnowConb2 from './components/snowconPageb2/snowconPageb2';
import SnowConb3 from './components/snowconPageb3/snowconPageb3';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import HotGameOne  from './components/hotGameOne/hotGameOne';
import HotGameTwo  from './components/hotGameTwo/hotGameTwo';
import HotGameThree  from './components/hotGameThree/hotGameThree';
import HotGameFour  from './components/hotGameFour/hotGameFour';
import WildGameOne  from './components/wildGameOne/wildGameOne';
import WildGameTwo  from './components/wildGameTwo/wildGameTwo';
import WildGameThree  from './components/wildGameThree/wildGameThree';
import WildGameFour  from './components/wildGameFour/wildGameFour';
import CozGameOne  from './components/cozGameOne/cozGameOne';
import CozGameTwo  from './components/cozGameTwo/cozGameTwo';
import CozGameThree  from './components/cozGameThree/cozGameThree';
import CozGameFour  from './components/cozGameFour/cozGameFour';
import PupGameOne  from './components/pupGameOne/pupGameOne';
import PupGameTwo  from './components/pupGameTwo/pupGameTwo';
import PupGameThree  from './components/pupGameThree/pupGameThree';
import PupGameFour  from './components/pupGameFour/pupGameFour';
import HomePage  from './components/homePage/homePage';
import VideosPage  from './components/videosPage/videosPage';
import PackagesPage  from './components/packagesPage/packagesPage';
import ContactUs  from './components/contactUs/contactUs';
import QuestionsPage  from './components/questionsPage/questionsPage';
import AboutUs  from './components/aboutUs/aboutUs';
import PlanetsPageG1  from './components/planetsPageG1/planetsPageG1';













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
              <Route exact path="/games" render={(props) => (
              <GamesPage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/snocon" render={(props) => (
              <SnowCon
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/snoconb1" render={(props) => (
              <SnowConb1
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/snoconb2" render={(props) => (
              <SnowConb2
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/snoconb3" render={(props) => (
              <SnowConb3
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno1" render={(props) => (
              <GameOne
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
               
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2" render={(props) => (
              <GameTwo
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3" render={(props) => (
              <GameThree
              answerset={[
                { problem: "2 + 2 =", answer: "5"},
                { problem: "2 + 1 =", answer: "7"},
                { problem: "2 + 4 =", answer: "8"},
                { problem: "2 + 2 =", answer: "3"},
                { problem: "2 + 1 =", answer: "4"},
                { problem: "2 + 3 =", answer: "10"},
              
              ]}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno4" render={(props) => (
              <GameFour answerset={[
                { problem: "eee=", answer: "e"},
                { problem: "poop", answer: "7"},
                { problem: "pee", answer: "8"},
                { problem: "nut", answer: "3"},
                { problem: "ip", answer: "4"},
                { problem: "tuns", answer: "10"},
              
              ]}
              
              
                {...props} />
                
                )}/>
                
      </section>
      <section>
      <Route exact path="/bbsno1" render={(props) => (
              <BossBattleSno
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/snov1" render={(props) => (
              <VideoPlayer url= "https://www.youtube.com/watch?v=0RYHpQHicgs"
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/v1" render={(props) => (
              <VideoPlayer url= "https://www.youtube.com/watch?v=_WZem4eS5v8"
               width= "75%"
               name= "fart"
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot1" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot2" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot3" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot4" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1" render={(props) => (
              <WildGameOne
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild2" render={(props) => (
              <WildGameTwo
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3" render={(props) => (
              <WildGameThree
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4" render={(props) => (
              <WildGameFour
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/coz1" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
                
      </section>
      <Route exact path="/coz2" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>
      <section>
      <Route exact path="/coz3" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/coz4" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup1" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup2" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup3" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>

      </section>
            <section>
      <Route exact path="/pup4" render={(props) => (
              <PupGameFour
              answerset = {[
                { problem: "3 + 2 =", answer: "5"},
                { problem: "6 + 1 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 1 =", answer: "4"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "6 + 3 =", answer: "9"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/" render={(props) => (
              <HomePage
              
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/home" render={(props) => (
              <HomePage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/videos" render={(props) => (
              <VideosPage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/premium" render={(props) => (
              <PackagesPage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/contact" render={(props) => (
              <ContactUs
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/questions" render={(props) => (
              <QuestionsPage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/about" render={(props) => (
              <AboutUs
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/planetsPageG1" render={(props) => (
              <PlanetsPageG1
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      
      <section>

     
      {/* <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />}/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />}/> */}
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
