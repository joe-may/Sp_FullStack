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
import MysticBadgePage  from './components/mysticBadgePage/mysticBadgePage';
import FeedbackPage  from './components/feedbackPage/feedbackPage';
import VideosPage  from './components/videosPage/videosPage';
import PackagesPage  from './components/packagesPage/packagesPage';
import ContactUs  from './components/contactUs/contactUs';
import QuestionsPage  from './components/questionsPage/questionsPage';
import AboutUs  from './components/aboutUs/aboutUs';
import PlanetsPageA  from './components/planetsPageA/planetsPageA';
import PlanetsPageS  from './components/planetsPageS/planetsPageS';
import PlanetsPageM  from './components/planetsPageM/planetsPageM';
import PlanetsPageD from './components/planetsPageD/planetsPageD';
import TermsPage from "./components/termsPage/termsPage";
import PrivacyPage from "./components/privacyPage/privacyPage";
import ArcadePage from "./components/arcadePage/arcadePage";
import ArcadePages from "./components/arcadePages/arcadePages";
import ArcadePagem from "./components/arcadePagem/arcadePagem";
import ArcadePaged from "./components/arcadePaged/arcadePaged";
import DuckRace from "./components/duckRace/duckRace";
import FireworksGame from "./components/fireworksGame/fireworksGame";















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
              nxtlvl={'/sno2'}
              gButton={'/planetspagea'}
              
              
              
           
                {...props} />
               
                )}/>
      </section>
      <section>
          <Route exact path="/sno1s" render={(props) => (
              <GameOne
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/sno2s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno1m" render={(props) => (
              <GameOne
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/sno2m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno1d" render={(props) => (
              <GameOne
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/sno2d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3" render={(props) => (
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
              nxtlvl={'/bbsno1'}
              gButton={'/planetspagea'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3s" render={(props) => (
              <GameTwo
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/bbsno1s'}
              gButton={'/planetspages'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3m" render={(props) => (
              <GameTwo
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/bbsno1m'}
              gButton={'/planetspagem'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3d" render={(props) => (
              <GameTwo
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/bbsno1d'}
              gButton={'/planetspaged'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2" render={(props) => (
              <GameThree
              answerset={[
                { problem: "2 + 2 =", answer: "4"},
                { problem: "2 + 1 =", answer: "3"},
                { problem: "2 + 4 =", answer: "6"},
                { problem: "2 + 2 =", answer: "4"},
                { problem: "2 + 1 =", answer: "3"},
                { problem: "2 + 3 =", answer: "5"},
              
              ]}
              nxtlvl={'/sno3'}
              gButton={'/planetspagea'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2s" render={(props) => (
              <GameThree
              answerset={[
                { problem: "2 - 2 =", answer: "5"},
                { problem: "2 - 1 =", answer: "7"},
                { problem: "2 - 4 =", answer: "8"},
                { problem: "2 - 2 =", answer: "3"},
                { problem: "2 - 1 =", answer: "4"},
                { problem: "2 - 3 =", answer: "10"},
              
              ]}
              nxtlvl={'/sno3s'}
              gButton={'/planetspages'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2m" render={(props) => (
              <GameThree
              answerset={[
                { problem: "2 x 2 =", answer: "5"},
                { problem: "2 x 1 =", answer: "7"},
                { problem: "2 x 4 =", answer: "8"},
                { problem: "2 x 2 =", answer: "3"},
                { problem: "2 x 1 =", answer: "4"},
                { problem: "2 x 3 =", answer: "10"},
              
              ]}
              nxtlvl={'/sno3m'}
              gButton={'/planetspagem'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2d" render={(props) => (
              <GameThree
              answerset={[
                { problem: "2 ÷ 2 =", answer: "5"},
                { problem: "2 ÷ 1 =", answer: "7"},
                { problem: "2 ÷ 4 =", answer: "8"},
                { problem: "2 ÷ 2 =", answer: "3"},
                { problem: "2 ÷ 1 =", answer: "4"},
                { problem: "2 ÷ 3 =", answer: "10"},
              
              ]}
              nxtlvl={'/sno3d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/v5#a'}
              gButton={'/planetspagea'}
              
                 
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
              nxtlvl={'/hot1'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/bbsno1s" render={(props) => (
              <BossBattleSno
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot1s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/bbsno1m" render={(props) => (
              <BossBattleSno
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot1m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/bbsno1d" render={(props) => (
              <BossBattleSno
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot1d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/hot2'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot1s" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot2s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot1m" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot2m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot1d" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot2d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/hot3'}
              gButton={'/planetspagea'}

                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot2s" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot3s'}
              gButton={'/planetspages'}

                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot2m" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot3m'}
              gButton={'/planetspagem'}

                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot2d" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot3d'}
              gButton={'/planetspaged'}

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
              nxtlvl={'/hot4'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot3s" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot4s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot3m" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot4m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot3d" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot4d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/wild1'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot4s" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild1s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot4m" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild1m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot4d" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild1'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/wild2'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1s" render={(props) => (
              <WildGameOne
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
                
              ]}
              nxtlvl={'/wild2d'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1m" render={(props) => (
              <WildGameOne
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
                
              ]}
              nxtlvl={'/wild2m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1d" render={(props) => (
              <WildGameOne
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
                
              ]}
              nxtlvl={'/wild2d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/wild3'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild2s" render={(props) => (
              <WildGameTwo
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild3s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild2m" render={(props) => (
              <WildGameTwo
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild3m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild2d" render={(props) => (
              <WildGameTwo
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
              ]}
              nxtlvl={'/wild3d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/wild4'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3s" render={(props) => (
              <WildGameThree
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild4s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3m" render={(props) => (
              <WildGameThree
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild4m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3d" render={(props) => (
              <WildGameThree
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild4d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/coz1'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4s" render={(props) => (
              <WildGameFour
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz1s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4m" render={(props) => (
              <WildGameFour
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz1m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4d" render={(props) => (
              <WildGameFour
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz1d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/coz2'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
                
      </section>
      <section>
          <Route exact path="/coz1s" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
              ]}
              nxtlvl={'/coz2s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
                
      </section>
      <section>
          <Route exact path="/coz1m" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz2m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
                
      </section>
      <section>
          <Route exact path="/coz1d" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz2d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
                
      </section>
      <section>
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
              nxtlvl={'/coz3'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/coz2s" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz3s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/coz2m" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
              ]}
              nxtlvl={'/coz3m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/coz2d" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz3d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
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
              nxtlvl={'/coz4'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/coz3s" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz4s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/coz3m" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
              ]}
              nxtlvl={'/coz4m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/coz3d" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
              ]}
              nxtlvl={'/coz4d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/pup1'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/coz4s" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/pup1s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/coz4m" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
              ]}
              nxtlvl={'/pup1m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/coz4d" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
              ]}
              nxtlvl={'/pup1d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/v16#a'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup1s" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
                
              ]}
              nxtlvl={'/v16#s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup1m" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
                
              ]}
              nxtlvl={'/v16#m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup1d" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/v16#d'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/v17#a'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup2s" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/v17#s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup2m" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/v17#s'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup2d" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              gButton={'/planetspaged'}
              nxtlvl={'/v17#d'}
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
              nxtlvl={'/v18#a'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup3s" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/v18#s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup3m" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/v18#m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup3d" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/v18#m'}
              gButton={'/planetspaged'}
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
              nxtlvl={'/v18#a'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup4s" render={(props) => (
              <PupGameFour
              answerset = {[
                { problem: "3 - 2 =", answer: "5"},
                { problem: "6 - 1 =", answer: "7"},
                { problem: "4 - 4 =", answer: "8"},
                { problem: "1 - 2 =", answer: "3"},
                { problem: "3 - 1 =", answer: "4"},
                { problem: "7 - 3 =", answer: "10"},
                { problem: "6 - 3 =", answer: "9"},
                { problem: "2 - 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/v18#s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup4m" render={(props) => (
              <PupGameFour
              answerset = {[
                { problem: "3 x 2 =", answer: "5"},
                { problem: "6 x 1 =", answer: "7"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/v18#m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup4d" render={(props) => (
              <PupGameFour
              answerset = {[
                { problem: "3 ÷ 2 =", answer: "5"},
                { problem: "6 ÷ 1 =", answer: "7"},
                { problem: "4 ÷ 4 =", answer: "8"},
                { problem: "1 ÷ 2 =", answer: "3"},
                { problem: "3 ÷ 1 =", answer: "4"},
                { problem: "7 ÷ 3 =", answer: "10"},
                { problem: "6 ÷ 3 =", answer: "9"},
                { problem: "2 ÷ 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/v18#d'}
              gButton={'/planetspaged'}
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
      <Route exact path="/arcade-play" render={(props) => (
              <ArcadePage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-plays" render={(props) => (
              <ArcadePages
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-playm" render={(props) => (
              <ArcadePagem
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-playd" render={(props) => (
              <ArcadePaged
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>

      <section>
      <Route exact path="/arcade-ducka" render={(props) => (
              <DuckRace
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
              // nxtlvl={'/v18#a'}
              // gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-fireworksa" render={(props) => (
              <FireworksGame
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
              // nxtlvl={'/v18#a'}
              // gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>


  
      <section>
      <Route exact path="/privacy" render={(props) => (
              <PrivacyPage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/terms" render={(props) => (
              <TermsPage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/mysticbadge-play" render={(props) => (
              <MysticBadgePage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/feedback" render={(props) => (
              <FeedbackPage
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>

      <section>
      <Route exact path="/all-videos" render={(props) => (
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
      <Route exact path="/planetsPageA" render={(props) => (
              <PlanetsPageA
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/planetsPageS" render={(props) => (
              <PlanetsPageS
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/planetsPageM" render={(props) => (
              <PlanetsPageM
                //passing user from app to home so i can access it in NavBar!! important!!
                // user={this.state.user}
                // handleLogout={this.handleLogout}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/planetsPageD" render={(props) => (
              <PlanetsPageD
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
