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
import PlanetsPageATwo  from './components/planetsPageATwo/planetsPageATwo';
import PlanetsPageS  from './components/planetsPageS/planetsPageS';
import PlanetsPageSTwo  from './components/planetsPageSTwo/planetsPageSTwo';
import PlanetsPageM  from './components/planetsPageM/planetsPageM';
import PlanetsPageMTwo  from './components/planetsPageMTwo/planetsPageMTwo';
import PlanetsPageD from './components/planetsPageD/planetsPageD';
import PlanetsPageDTwo from './components/planetsPageDTwo/planetsPageDTwo';
import TermsPage from "./components/termsPage/termsPage";
import PrivacyPage from "./components/privacyPage/privacyPage";
import ArcadePage from "./components/arcadePage/arcadePage";
import ArcadePages from "./components/arcadePages/arcadePages";
import ArcadePagem from "./components/arcadePagem/arcadePagem";
import ArcadePaged from "./components/arcadePaged/arcadePaged";
import DuckRace from "./components/duckRace/duckRace";
import FireworksGame from "./components/fireworksGame/fireworksGame";
import SlamDunk from "./components/slamDunk/slamDunk";




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
                { problem: "5 + 1 =", answer: "6"},			
                { problem: "2 + 2 =", answer: "4"},
                { problem: "2 + 3 =", answer: "5"},
                { problem: "1 + 2 =", answer: "3"},
                { problem: "3 + 3 =", answer: "6"},
                { problem: "3 + 4 =", answer: "7"},
                { problem: "5 + 5 =", answer: "10"},
                { problem: "5 + 6 =", answer: "11"},
      
              ]}
              nxtlvl={'/sno2'}
              gButton={'/planetspagea'}
              
              
              
           
                {...props} />
               
                )}/>
      </section>
      <section>
          <Route exact path="/sno1a2" render={(props) => (
           
              <GameOne
              answerset = {[
                { problem: "11 + 2 =", answer: "13"},
                { problem: "10 + 6 =", answer: "16"},
                { problem: "14 + 5 =", answer: "19"},
                { problem: "15 + 3 =", answer: "18"},
                { problem: "11 + 4 =", answer: "15"},
                { problem: "16 + 4 =", answer: "20"},
                { problem: "10 + 5 =", answer: "15"},
                { problem: "15 + 5 =", answer: "20"},
                
              ]}
              nxtlvl={'/sno2'}
              gButton={'/planetspageatwo'}
              
              
              
           
                {...props} />
               
                )}/>
      </section>
      <section>
          <Route exact path="/sno1s" render={(props) => (
              <GameOne
              answerset = {[
                { problem: "2 - 2 =", answer: "0"},
                { problem: "4 - 3 =", answer: "1"},
                { problem: "6 - 2 =", answer: "4"},
                { problem: "8 - 4 =", answer: "4"},
                { problem: "9 - 5 =", answer: "4"},
                { problem: "7 - 2 =", answer: "5"},
                { problem: "8 - 6 =", answer: "2"},
                { problem: "5 - 2 =", answer: "3"},
                
              ]}
              nxtlvl={'/sno2s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno1s2" render={(props) => (
              <GameOne
              answerset = {[
                { problem: "15 - 2 =", answer: "3"},
                { problem: "12 - 3 =", answer: "9"},
                { problem: "11 - 5 =", answer: "6"},
                { problem: "10 - 3 =", answer: "7"},
                { problem: "13 - 5 =", answer: "8"},
                { problem: "18 - 7 =", answer: "11"},
                { problem: "20 - 10 =", answer: "10"},
                { problem: "17 - 10 =", answer: "7"},
                
              ]}
              nxtlvl={'/sno2s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno1m" render={(props) => (
              <GameOne
              answerset = {[
                { problem: "1 x 2 =", answer: "2"},
                { problem: "2 x 7 =", answer: "14"},
                { problem: "1 x 10 =", answer: "10"},
                { problem: "2 x 8 =", answer: "16"},
                { problem: "2 x 5 =", answer: "10"},
                { problem: "1 x 6 =", answer: "6"},
                { problem: "2 x 9 =", answer: "18"},
                { problem: "2 x 10 =", answer: "20"},
                
              ]}
              nxtlvl={'/sno2m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno1m2" render={(props) => (
              <GameOne
              answerset = {[
                { problem: "7 x 1 =", answer: "7"},
                { problem: "2 x 3 =", answer: "6"},
                { problem: "9 x 1 =", answer: "9"},
                { problem: "2 x 4 =", answer: "8"},
                { problem: "1 x 4 =", answer: "4"},
                { problem: "2 x 6 =", answer: "12"},
                { problem: "8 x 1 =", answer: "8"},
                { problem: "2 x 2 =", answer: "4"},
                
              ]}
              nxtlvl={'/sno3m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno1d" render={(props) => (
              <GameOne
              answerset = {[

                { problem: "2 ÷ 1 =", answer: "2"},
                { problem: "12 ÷ 2 =", answer: "6"},
                { problem: "10 ÷ 1 =", answer: "10"},
                { problem: "18 ÷ 2 =", answer: "9"},
                { problem: "6 ÷ 2 =", answer: "3"},
                { problem: "14 ÷ 2 =", answer: "7"},
                { problem: "16 ÷ 2 =", answer: "8"},
                { problem: "20 ÷ 2 =", answer: "10"},

                
              ]}
              nxtlvl={'/sno2d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno1d2" render={(props) => (
              <GameOne
              answerset = {[

                  { problem: "29 ÷ 1 =", answer: "29"},
                  { problem: "8 ÷ 2 =", answer: "4"},
                  { problem: "16 ÷ 1 =", answer: "8"},
                  { problem: "10 ÷ 2 =", answer: "5"},
                  { problem: "34÷ 1 =", answer: "34"},
                  { problem: "4 ÷ 2 =", answer: "2"},
                  { problem: "23 ÷ 1 =", answer: "23"},
                  { problem: "14 ÷ 2 =", answer: "7"},

                
              ]}
              nxtlvl={'/sno2d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/sno3a2" render={(props) => (
           
              <GameTwo
              answerset = {[
                { problem: "11 + 2 =", answer: "13"},
                { problem: "10 + 6 =", answer: "16"},
                { problem: "14 + 5 =", answer: "19"},
                { problem: "15 + 3 =", answer: "18"},
                { problem: "11 + 4 =", answer: "15"},
                { problem: "16 + 4 =", answer: "20"},
                { problem: "10+ 5 =", answer: "15"},
                { problem: "15 + 5 =", answer: "20"},
                
              ]}
              nxtlvl={'/sno2a2'}
              gButton={'/planetspageatwo'}
              
              
              
           
                {...props} />
               
                )}/>
      </section>
      <section>
          <Route exact path="/sno3s" render={(props) => (
              <GameTwo
              answerset = {[
                { problem: "2 - 2 =", answer: "0"},
                { problem: "4 - 3 =", answer: "1"},
                { problem: "6 - 2 =", answer: "4"},
                { problem: "8 - 4 =", answer: "4"},
                { problem: "9 - 5 =", answer: "4"},
                { problem: "7 - 2 =", answer: "5"},
                { problem: "8 - 6 =", answer: "2"},
                { problem: "5 - 2 =", answer: "3"},
                
              ]}
              nxtlvl={'/bbsno1s'}
              gButton={'/planetspages'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3s2" render={(props) => (
              <GameThree
              answerset = {[
                { problem: "15 - 2 =", answer: "3"},
                { problem: "12 - 3 =", answer: "9"},
                { problem: "11 - 5 =", answer: "6"},
                { problem: "10 - 3 =", answer: "7"},
                { problem: "13 - 5 =", answer: "8"},
                { problem: "18 - 7 =", answer: "11"},
                { problem: "20 - 10 =", answer: "10"},
                { problem: "17 - 10 =", answer: "7"},
                
              ]}
              nxtlvl={'/sno2s'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3m" render={(props) => (
              <GameTwo
              answerset = {[
                { problem: "1 x 2 =", answer: "2"},
                { problem: "2 x 7 =", answer: "14"},
                { problem: "1 x 10 =", answer: "10"},
                { problem: "2 x 8 =", answer: "16"},
                { problem: "2 x 5 =", answer: "10"},
                { problem: "1 x 6 =", answer: "6"},
                { problem: "2 x 9 =", answer: "18"},
                { problem: "2 x 10 =", answer: "20"}
                
              ]}
              nxtlvl={'/bbsno1m'}
              gButton={'/planetspagem'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3m2" render={(props) => (
              <GameThree
              answerset = {[
                { problem: "7 x 1 =", answer: "7"},
                { problem: "2 x 3 =", answer: "6"},
                { problem: "9 x 1 =", answer: "9"},
                { problem: "2 x 4 =", answer: "8"},
                { problem: "1 x 4 =", answer: "4"},
                { problem: "2 x 6 =", answer: "12"},
                { problem: "8 x 1 =", answer: "8"},
                { problem: "2 x 2 =", answer: "4"},
                
              ]}
              nxtlvl={'/sno2m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3d" render={(props) => (
              <GameTwo
              answerset = {[
              
                { problem: "2 ÷ 1 =", answer: "2"},
                { problem: "12 ÷ 2 =", answer: "6"},
                { problem: "10 ÷ 1 =", answer: "10"},
                { problem: "18 ÷ 2 =", answer: "9"},
                { problem: "6 ÷ 2 =", answer: "3"},
                { problem: "14 ÷ 2 =", answer: "7"},
                { problem: "16 ÷ 2 =", answer: "8"},
                { problem: "20 ÷ 2 =", answer: "10"},
                
              ]}
              nxtlvl={'/bbsno1d'}
              gButton={'/planetspaged'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno3d2" render={(props) => (
              <GameThree
              answerset = {[

                  { problem: "29 ÷ 1 =", answer: "29"},
                  { problem: "8 ÷ 2 =", answer: "4"},
                  { problem: "16 ÷ 1 =", answer: "8"},
                  { problem: "10 ÷ 2 =", answer: "5"},
                  { problem: "34÷ 1 =", answer: "34"},
                  { problem: "4 ÷ 2 =", answer: "2"},
                  { problem: "23 ÷ 1 =", answer: "23"},
                  { problem: "14 ÷ 2 =", answer: "7"},

                
              ]}
              nxtlvl={'/bbsno1d2'}
              gButton={'/planetspaged2'}
                {...props} />
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
                { problem: "2 + 7 =", answer: "9"},
                { problem: "2 + 8 =", answer: "10"},
              
              ]}
              nxtlvl={'/sno3'}
              gButton={'/planetspagea'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2a2" render={(props) => (
           
              <GameThree
              answerset = {[
                { problem: "11 + 2 =", answer: "13"},
                { problem: "10 + 6 =", answer: "16"},
                { problem: "14 + 5 =", answer: "19"},
                { problem: "15 + 3 =", answer: "18"},
                { problem: "11 + 4 =", answer: "15"},
                { problem: "16 + 4 =", answer: "20"},
                { problem: "10+ 5 =", answer: "15"},
                { problem: "15 + 5 =", answer: "20"},
                
              ]}
              nxtlvl={'/sno2a2'}
              gButton={'/planetspageatwo'}
              
              
              
           
                {...props} />
               
                )}/>
      </section>
      <section>
          <Route exact path="/sno2s" render={(props) => (
              <GameThree
              answerset={[
               { problem: "2 - 2 =", answer: "0"},
               { problem: "4 - 3 =", answer: "1"},
               { problem: "6 - 2 =", answer: "4"},
               { problem: "8 - 4 =", answer: "4"},
               { problem: "9 - 5 =", answer: "4"},
               { problem: "7 - 2 =", answer: "5"},
               { problem: "8 - 6 =", answer: "2"},
               { problem: "5 - 2 =", answer: "3"},
                
              
              ]}
              nxtlvl={'/sno3s'}
              gButton={'/planetspages'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2s2" render={(props) => (
              <GameTwo
              answerset = {[
                { problem: "15 - 2 =", answer: "3"},
                { problem: "12 - 3 =", answer: "9"},
                { problem: "11 - 5 =", answer: "6"},
                { problem: "10 - 3 =", answer: "7"},
                { problem: "13 - 5 =", answer: "8"},
                { problem: "18 - 7 =", answer: "11"},
                { problem: "20 - 10 =", answer: "10"},
                { problem: "17 - 10 =", answer: "7"},
                
              ]}
              nxtlvl={'/sno2s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2m" render={(props) => (
              <GameThree
              answerset={[
                { problem: "1 x 2 =", answer: "2"},
                { problem: "2 x 7 =", answer: "14"},
                { problem: "1 x 10 =", answer: "10"},
                { problem: "2 x 8 =", answer: "16"},
                { problem: "2 x 5 =", answer: "10"},
                { problem: "1 x 6 =", answer: "6"},
                { problem: "2 x 9 =", answer: "18"},
                { problem: "2 x 10 =", answer: "20"}
              
              ]}
              nxtlvl={'/sno3m'}
              gButton={'/planetspagem'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2m2" render={(props) => (
              <GameTwo
              answerset = {[
                { problem: "7 x 1 =", answer: "7"},
                { problem: "2 x 3 =", answer: "6"},
                { problem: "9 x 1 =", answer: "9"},
                { problem: "2 x 4 =", answer: "8"},
                { problem: "1 x 4 =", answer: "4"},
                { problem: "2 x 6 =", answer: "12"},
                { problem: "8 x 1 =", answer: "8"},
                { problem: "2 x 2 =", answer: "4"},
                
              ]}
              nxtlvl={'/bbsno1m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2d" render={(props) => (
              <GameThree
              answerset={[
                { problem: "2 ÷ 1 =", answer: "2"},
                { problem: "12 ÷ 2 =", answer: "6"},
                { problem: "10 ÷ 1 =", answer: "10"},
                { problem: "18 ÷ 2 =", answer: "9"},
                { problem: "6 ÷ 2 =", answer: "3"},
                { problem: "14 ÷ 2 =", answer: "7"},
                { problem: "16 ÷ 2 =", answer: "8"},
                { problem: "20 ÷ 2 =", answer: "10"},
              
              ]}
              nxtlvl={'/sno3d'}
              gButton={'/planetspaged'}
                />
                )}/>
      </section>
      <section>
          <Route exact path="/sno2d2" render={(props) => (
              <GameTwo
              answerset = {[

                  { problem: "29 ÷ 1 =", answer: "29"},
                  { problem: "8 ÷ 2 =", answer: "4"},
                  { problem: "16 ÷ 1 =", answer: "8"},
                  { problem: "10 ÷ 2 =", answer: "5"},
                  { problem: "34÷ 1 =", answer: "34"},
                  { problem: "4 ÷ 2 =", answer: "2"},
                  { problem: "23 ÷ 1 =", answer: "23"},
                  { problem: "14 ÷ 2 =", answer: "7"},

                
              ]}
              nxtlvl={'/sno3d2'}
              gButton={'/planetspaged2'}
                {...props} />
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
          <Route exact path="/bbsno1a2" render={(props) => (
           
              <BossBattleSno
              answerset = {[
                { problem: "11 + 2 =", answer: "13"},
                { problem: "10 + 6 =", answer: "16"},
                { problem: "14 + 5 =", answer: "19"},
                { problem: "15 + 3 =", answer: "18"},
                { problem: "11 + 4 =", answer: "15"},
                { problem: "16 + 4 =", answer: "20"},
                { problem: "10 + 5 =", answer: "15"},
                { problem: "15 + 5 =", answer: "20"},
                
              ]}
              nxtlvl={'/hot1a2'}
              gButton={'/planetspageatwo'}
              
              
              
           
                {...props} />
               
                )}/>
      </section>
      <section>
      <Route exact path="/bbsno1s" render={(props) => (
              <BossBattleSno
              answerset = {[
                { problem: "2 - 2 =", answer: "0"},
                { problem: "4 - 3 =", answer: "1"},
                { problem: "6 - 2 =", answer: "4"},
                { problem: "8 - 4 =", answer: "4"},
                { problem: "9 - 5 =", answer: "4"},
                { problem: "7 - 2 =", answer: "5"},
                { problem: "8 - 6 =", answer: "2"},
                { problem: "5 - 2 =", answer: "3"},
                
              ]}
              nxtlvl={'/hot1s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/bbsno1s2" render={(props) => (
              <BossBattleSno
              answerset = {[
                { problem: "15 - 2 =", answer: "3"},
                { problem: "12 - 3 =", answer: "9"},
                { problem: "11 - 5 =", answer: "6"},
                { problem: "10 - 3 =", answer: "7"},
                { problem: "13 - 5 =", answer: "8"},
                { problem: "18 - 7 =", answer: "11"},
                { problem: "20 - 10 =", answer: "10"},
                { problem: "17 - 10 =", answer: "7"},
                
              ]}
              nxtlvl={'/hot1s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/bbsno1m" render={(props) => (
              <BossBattleSno
              answerset = {[
                { problem: "1 x 2 =", answer: "2"},
                { problem: "2 x 7 =", answer: "14"},
                { problem: "1 x 10 =", answer: "10"},
                { problem: "2 x 8 =", answer: "16"},
                { problem: "2 x 5 =", answer: "10"},
                { problem: "1 x 6 =", answer: "6"},
                { problem: "2 x 9 =", answer: "18"},
                { problem: "2 x 10 =", answer: "20"}
                
              ]}
              nxtlvl={'/hot1m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/bbsno1m2" render={(props) => (
              <BossBattleSno
              answerset = {[
                { problem: "7 x 1 =", answer: "7"},
                { problem: "2 x 3 =", answer: "6"},
                { problem: "9 x 1 =", answer: "9"},
                { problem: "2 x 4 =", answer: "8"},
                { problem: "1 x 4 =", answer: "4"},
                { problem: "2 x 6 =", answer: "12"},
                { problem: "8 x 1 =", answer: "8"},
                { problem: "2 x 2 =", answer: "4"},
                
              ]}
              nxtlvl={'/hot1m2two'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/bbsno1d" render={(props) => (
              <BossBattleSno
              answerset = {[

                { problem: "2 ÷ 1 =", answer: "2"},
                { problem: "12 ÷ 2 =", answer: "6"},
                { problem: "10 ÷ 1 =", answer: "10"},
                { problem: "18 ÷ 2 =", answer: "9"},
                { problem: "6 ÷ 2 =", answer: "3"},
                { problem: "14 ÷ 2 =", answer: "7"},
                { problem: "16 ÷ 2 =", answer: "8"},
                { problem: "20 ÷ 2 =", answer: "10"},
                
              ]}
              nxtlvl={'/hot1d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/bbsnod2" render={(props) => (
              <BossBattleSno
              answerset = {[

                  { problem: "29 ÷ 1 =", answer: "29"},
                  { problem: "8 ÷ 2 =", answer: "4"},
                  { problem: "16 ÷ 1 =", answer: "8"},
                  { problem: "10 ÷ 2 =", answer: "5"},
                  { problem: "34 ÷ 1 =", answer: "34"},
                  { problem: "4 ÷ 2 =", answer: "2"},
                  { problem: "23 ÷ 1 =", answer: "23"},
                  { problem: "14 ÷ 2 =", answer: "7"},

                
              ]}
              nxtlvl={'/hot1d2'}
              gButton={'/planetspaged2'}
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
                { problem: "4 + 3 =", answer: "7"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "5 + 4 =", answer: "9"},
                { problem: "1 + 1 =", answer: "2"},
                { problem: "3 + 2 =", answer: "5"},
                { problem: "4 + 2 =", answer: "6"},
                { problem: "4 + 6 =", answer: "10"},
                { problem: "2 + 4 =", answer: "6"},
                
              ]}
              nxtlvl={'/hot2'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot1a2" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "18 + 1 =", answer: "19"},
                { problem: "17 + 3 =", answer: "20"},
                { problem: "12 + 2 =", answer: "14"},
                { problem: "11 + 6 =", answer: "17"},
                { problem: "10 + 3 =", answer: "13"},
                { problem: "16 + 1 =", answer: "17"},
                { problem: "14 + 3 =", answer: "17"},
                { problem: "15 + 4 =", answer: "19"},
                
                
              ]}
              nxtlvl={'/hot2a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot1s" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "3 - 2 =", answer: "1"},
                { problem: "5 - 3 =", answer: "2"},
                { problem: "4 - 4 =", answer: "0"},
                { problem: "9 - 8 =", answer: "1"},
                { problem: "7 - 4 =", answer: "3"},
                { problem: "10 - 3 =", answer: "7"},
                { problem: "10 - 5 =", answer: "5"},
                { problem: "9 - 4 =", answer: "5"},
                
              ]}
              nxtlvl={'/hot2s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot1s2" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "15 - 9 =", answer: "6"},
                { problem: "16 - 8 =", answer: "8"},
                { problem: "18 - 5 =", answer: "3"},
                { problem: "12 - 6 =", answer: "6"},
                { problem: "13 - 10 =", answer: "3"},
                { problem: "18 - 9 =", answer: "9"},
                { problem: "19 - 4 =", answer: "5"},
                { problem: "20 - 7 =", answer: "3"},
                
              ]}
              nxtlvl={'/hot2s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      
      <section>
          <Route exact path="/hot1m" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "3 x 3 =", answer: "9"},
                { problem: "4 x 5 =", answer: "20"},
                { problem: "3 x 7 =", answer: "21"},
                { problem: "4 x 8 =", answer: "32"},
                { problem: "3 x 9 =", answer: "27"},
                { problem: "4 x 3 =", answer: "12"},
                { problem: "3 x 4 =", answer: "12"},
                { problem: "4 x 10 =", answer: "40"},
                
              ]}
              nxtlvl={'/hot2m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot1m2" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "3 x 8 =", answer: "24"},
                { problem: "4 x 7 =", answer: "28"},
                { problem: "10 x 3 =", answer: "30"},
                { problem: "4 x 9 =", answer: "36"},
                { problem: "5 x 3 =", answer: "15"},
                { problem: "4 x 6 =", answer: "24"},
                { problem: "3 x 6 =", answer: "18"},
                { problem: "4 x 10 =", answer: "40"},
                
              ]}
              nxtlvl={'/hot2m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      
      <section>
          <Route exact path="/hot1d" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "30 ÷ 3 =", answer: "10"},
                { problem: "20 ÷ 4 =", answer: "5"},
                { problem: "9 ÷ 3 =", answer: "3"},
                { problem: "24 ÷ 4 =", answer: "6"},
                { problem: "21 ÷ 3 =", answer: "7"},
                { problem: "12 ÷ 4 =", answer: "3"},
                { problem: "24 ÷ 3 =", answer: "8"},
                { problem: "16 ÷ 4 =", answer: "4"},
                
                
              ]}
              nxtlvl={'/hot2d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot1d2" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "27 ÷ 3 =", answer: "9"},
                { problem: "28 ÷ 4 =", answer: "7"},
                { problem: "18 ÷ 3 =", answer: "6"},
                { problem: "32 ÷ 4 =", answer: "8"},
                { problem: "6 ÷ 3 =", answer: "2"},
                { problem: "40 ÷ 4 =", answer: "10"},
                { problem: "15 ÷ 3 =", answer: "5"},
                { problem: "36 ÷ 4 =", answer: "9"},
                                
                
              ]}
              nxtlvl={'/hot2d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/hot2a2" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "18 + 1 =", answer: "19"},
                { problem: "17 + 3 =", answer: "20"},
                { problem: "12 + 2 =", answer: "14"},
                { problem: "11 + 6 =", answer: "17"},
                { problem: "10 + 3 =", answer: "13"},
                { problem: "16 + 1 =", answer: "17"},
                { problem: "14 + 3 =", answer: "17"},
                { problem: "15 + 4 =", answer: "19"},
                
                
              ]}
              nxtlvl={'/hot3a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot2s" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "3 - 2 =", answer: "1"},
                { problem: "5 - 3 =", answer: "2"},
                { problem: "4 - 4 =", answer: "0"},
                { problem: "9 - 8 =", answer: "1"},
                { problem: "7 - 4 =", answer: "3"},
                { problem: "10 - 3 =", answer: "7"},
                { problem: "10 - 5 =", answer: "5"},
                { problem: "9 - 4 =", answer: "5"},
                
              ]}
              nxtlvl={'/hot3s'}
              gButton={'/planetspages'}

                {...props} />
                )}/>
      </section>
       <section>
       <Route exact path="/hot2s2" render={(props) => (
           <HotGameTwo
           answerset = {[
            { problem: "15 - 9 =", answer: "6"},
            { problem: "16 - 8 =", answer: "8"},
            { problem: "18 - 5 =", answer: "3"},
            { problem: "12 - 6 =", answer: "6"},
            { problem: "13 - 10 =", answer: "3"},
            { problem: "18 - 9 =", answer: "9"},
            { problem: "19 - 4 =", answer: "5"},
            { problem: "20 - 7 =", answer: "3"},
             
           ]}
           nxtlvl={'/hot3s2'}
           gButton={'/planetspagestwo'}

             {...props} />
             )}/>
   </section>
      
      <section>
          <Route exact path="/hot2m" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "3 x 3 =", answer: "9"},
                { problem: "4 x 5 =", answer: "20"},
                { problem: "3 x 7 =", answer: "21"},
                { problem: "4 x 8 =", answer: "32"},
                { problem: "3 x 9 =", answer: "27"},
                { problem: "4 x 3 =", answer: "12"},
                { problem: "3 x 4 =", answer: "12"},
                { problem: "4 x 10 =", answer: "40"},
              ]}
              nxtlvl={'/hot3m'}
              gButton={'/planetspagem'}

                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot2m2" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "3 x 8 =", answer: "24"},
                { problem: "4 x 7 =", answer: "28"},
                { problem: "10 x 3 =", answer: "30"},
                { problem: "4 x 9 =", answer: "36"},
                { problem: "5 x 3 =", answer: "15"},
                { problem: "4 x 6 =", answer: "24"},
                { problem: "3 x 6 =", answer: "18"},
                { problem: "4 x 10 =", answer: "40"},
                
              ]}
              nxtlvl={'/hot3m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot2d" render={(props) => (
              <HotGameTwo
              answerset = {[

                { problem: "30 ÷ 3 =", answer: "10"},
                { problem: "20 ÷ 4 =", answer: "5"},
                { problem: "9 ÷ 3 =", answer: "3"},
                { problem: "24 ÷ 4 =", answer: "6"},
                { problem: "21 ÷ 3 =", answer: "7"},
                { problem: "12 ÷ 4 =", answer: "3"},
                { problem: "24 ÷ 3 =", answer: "8"},
                { problem: "16 ÷ 4 =", answer: "4"},
                
              ]}
              nxtlvl={'/hot3d'}
              gButton={'/planetspaged'}

                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot2d2" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "27 ÷ 3 =", answer: "9"},
                { problem: "28 ÷ 4 =", answer: "7"},
                { problem: "18 ÷ 3 =", answer: "6"},
                { problem: "32 ÷ 4 =", answer: "8"},
                { problem: "6 ÷ 3 =", answer: "2"},
                { problem: "40 ÷ 4 =", answer: "10"},
                { problem: "15 ÷ 3 =", answer: "5"},
                { problem: "36 ÷ 4 =", answer: "9"},
                                
                
              ]}
              nxtlvl={'/hot2d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/hot3a2" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "18 + 1 =", answer: "19"},
                { problem: "17 + 3 =", answer: "20"},
                { problem: "12 + 2 =", answer: "14"},
                { problem: "11 + 6 =", answer: "17"},
                { problem: "10 + 3 =", answer: "13"},
                { problem: "16 + 1 =", answer: "17"},
                { problem: "14 + 3 =", answer: "17"},
                { problem: "15 + 4 =", answer: "19"},
                
                
              ]}
              nxtlvl={'/hot4a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot3s" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "3 - 2 =", answer: "1"},
                { problem: "5 - 3 =", answer: "2"},
                { problem: "4 - 4 =", answer: "0"},
                { problem: "9 - 8 =", answer: "1"},
                { problem: "7 - 4 =", answer: "3"},
                { problem: "10 - 3 =", answer: "7"},
                { problem: "10 - 5 =", answer: "5"},
                { problem: "9 - 4 =", answer: "5"},
                
              ]}
              nxtlvl={'/hot4s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot3s2" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "15 - 9 =", answer: "6"},
                { problem: "16 - 8 =", answer: "8"},
                { problem: "18 - 5 =", answer: "3"},
                { problem: "12 - 6 =", answer: "6"},
                { problem: "13 - 10 =", answer: "3"},
                { problem: "18 - 9 =", answer: "9"},
                { problem: "19 - 4 =", answer: "5"},
                { problem: "20 - 7 =", answer: "3"},
                
              ]}
              nxtlvl={'/hot4s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      
      <section>
          <Route exact path="/hot3m" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "3 x 3 =", answer: "9"},
                { problem: "4 x 5 =", answer: "20"},
                { problem: "3 x 7 =", answer: "21"},
                { problem: "4 x 8 =", answer: "32"},
                { problem: "3 x 9 =", answer: "27"},
                { problem: "4 x 3 =", answer: "12"},
                { problem: "3 x 4 =", answer: "12"},
                { problem: "4 x 10 =", answer: "40"},
                
              ]}
              nxtlvl={'/hot4m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot3m2" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "3 x 8 =", answer: "24"},
                { problem: "4 x 7 =", answer: "28"},
                { problem: "10 x 3 =", answer: "30"},
                { problem: "4 x 9 =", answer: "36"},
                { problem: "5 x 3 =", answer: "15"},
                { problem: "4 x 6 =", answer: "24"},
                { problem: "3 x 6 =", answer: "18"},
                { problem: "4 x 10 =", answer: "40"},
                
              ]}
              nxtlvl={'/hot4m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot3d" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "30 ÷ 3 =", answer: "10"},
                { problem: "20 ÷ 4 =", answer: "5"},
                { problem: "9 ÷ 3 =", answer: "3"},
                { problem: "24 ÷ 4 =", answer: "6"},
                { problem: "21 ÷ 3 =", answer: "7"},
                { problem: "12 ÷ 4 =", answer: "3"},
                { problem: "24 ÷ 3 =", answer: "8"},
                { problem: "16 ÷ 4 =", answer: "4"},
                
              ]}
              nxtlvl={'/hot4d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot3d2" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "27 ÷ 3 =", answer: "9"},
                { problem: "28 ÷ 4 =", answer: "7"},
                { problem: "18 ÷ 3 =", answer: "6"},
                { problem: "32 ÷ 4 =", answer: "8"},
                { problem: "6 ÷ 3 =", answer: "2"},
                { problem: "40 ÷ 4 =", answer: "10"},
                { problem: "15 ÷ 3 =", answer: "5"},
                { problem: "36 ÷ 4 =", answer: "9"},
                                
                
              ]}
              nxtlvl={'/hot4d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/hot4a2" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "18 + 1 =", answer: "19"},
                { problem: "17 + 3 =", answer: "20"},
                { problem: "12 + 2 =", answer: "14"},
                { problem: "11 + 6 =", answer: "17"},
                { problem: "10 + 3 =", answer: "13"},
                { problem: "16 + 1 =", answer: "17"},
                { problem: "14 + 3 =", answer: "17"},
                { problem: "15 + 4 =", answer: "19"},
                
                
              ]}
              nxtlvl={'/hot2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot4s" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "3 - 2 =", answer: "1"},
                { problem: "5 - 3 =", answer: "2"},
                { problem: "4 - 4 =", answer: "0"},
                { problem: "9 - 8 =", answer: "1"},
                { problem: "7 - 4 =", answer: "3"},
                { problem: "10 - 3 =", answer: "7"},
                { problem: "10 - 5 =", answer: "5"},
                { problem: "9 - 4 =", answer: "5"},

              ]}
              nxtlvl={'/wild1s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot4s2" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "15 - 9 =", answer: "6"},
                { problem: "16 - 8 =", answer: "8"},
                { problem: "18 - 5 =", answer: "3"},
                { problem: "12 - 6 =", answer: "6"},
                { problem: "13 - 10 =", answer: "3"},
                { problem: "18 - 9 =", answer: "9"},
                { problem: "19 - 4 =", answer: "5"},
                { problem: "20 - 7 =", answer: "3"},
                
              ]}
              nxtlvl={'/wild1s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      
      <section>
          <Route exact path="/hot4m" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "3 x 3 =", answer: "9"},
                { problem: "4 x 5 =", answer: "20"},
                { problem: "3 x 7 =", answer: "21"},
                { problem: "4 x 8 =", answer: "32"},
                { problem: "3 x 9 =", answer: "27"},
                { problem: "4 x 3 =", answer: "12"},
                { problem: "3 x 4 =", answer: "12"},
                { problem: "4 x 10 =", answer: "40"},
                
              ]}
              nxtlvl={'/wild1m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot4m2" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "3 x 8 =", answer: "24"},
                { problem: "4 x 7 =", answer: "28"},
                { problem: "10 x 3 =", answer: "30"},
                { problem: "4 x 9 =", answer: "36"},
                { problem: "5 x 3 =", answer: "15"},
                { problem: "4 x 6 =", answer: "24"},
                { problem: "3 x 6 =", answer: "18"},
                { problem: "4 x 10 =", answer: "40"},
                
              ]}
              nxtlvl={'/wild1m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot4d" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "30 ÷ 3 =", answer: "10"},
                { problem: "20 ÷ 4 =", answer: "5"},
                { problem: "9 ÷ 3 =", answer: "3"},
                { problem: "24 ÷ 4 =", answer: "6"},
                { problem: "21 ÷ 3 =", answer: "7"},
                { problem: "12 ÷ 4 =", answer: "3"},
                { problem: "24 ÷ 3 =", answer: "8"},
                { problem: "16 ÷ 4 =", answer: "4"},
                
              ]}
              nxtlvl={'/wild1'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/hot4d2" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "27 ÷ 3 =", answer: "9"},
                { problem: "28 ÷ 4 =", answer: "7"},
                { problem: "18 ÷ 3 =", answer: "6"},
                { problem: "32 ÷ 4 =", answer: "8"},
                { problem: "6 ÷ 3 =", answer: "2"},
                { problem: "40 ÷ 4 =", answer: "10"},
                { problem: "15 ÷ 3 =", answer: "5"},
                { problem: "36 ÷ 4 =", answer: "9"},
                                
                
              ]}
              nxtlvl={'/wild1d2'}
              gButton={'/planetspaged2'}
                {...props} />
                )}/>
      </section>
      


      <section>
          <Route exact path="/wild1" render={(props) => (
              <WildGameOne
              answerset = {[
                { problem: "6 + 4 =", answer: "10"},
                { problem: "6 + 6 =", answer: "12"},
                { problem: "4 + 4 =", answer: "8"},
                { problem: "7 + 3 =", answer: "10"},
                { problem: "7 + 7 =", answer: "14"},
                { problem: "8 + 2 =", answer: "10"},
                { problem: "8 + 8 =", answer: "16"},
                { problem: "4 + 6 =", answer: "10"},
                
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
                { problem: "7 - 5 =", answer: "2"},
                { problem: "6 - 6 =", answer: "0"},
                { problem: "10 - 7 =", answer: "3"},
                { problem: "8 - 3 =", answer: "5"},
                { problem: "6 - 4 =", answer: "2"},
                { problem: "4 - 2 =", answer: "2"},
                { problem: "6 - 3 =", answer: "3"},
                { problem: "7 - 3 =", answer: "4"},
                
                
              ]}
              nxtlvl={'/wild2s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1s2" render={(props) => (
              <WildGameOne
              answerset = {[
                { problem: "14 - 8 =", answer: "6"},
                { problem: "11 - 9 =", answer: "2"},
                { problem: "17 - 6 =", answer: "11"},
                { problem: "13 - 8 =", answer: "5"},
                { problem: "14 - 10 =", answer: "4"},
                { problem: "10 - 10 =", answer: "0"},
                { problem: "16 - 6 =", answer: "10"},
                { problem: "16 - 10 =", answer: "6"},
                
                
              ]}
              nxtlvl={'/wild2s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1a2" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "10 + 2 =", answer: "12"},
                { problem: "12 + 5 =", answer: "7"},
                { problem: "13 + 4 =", answer: "17"},
                { problem: "14+ 2 =", answer: "16"},
                { problem: "10 + 7 =", answer: "4"},
                { problem: "4 + 13 =", answer: "17"},
                { problem: "18 + 2 =", answer: "20"},
                { problem: "12+ 4 =", answer: "16"},
                
                
              ]}
              nxtlvl={'/wild2a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1m" render={(props) => (
              <WildGameOne
              answerset = {[
                { problem: "5 x 3 =", answer: "15"},
                { problem: "6 x 6 =", answer: "36"},
                { problem: "5 x 5 =", answer: "25"},
                { problem: "5 x 4 =", answer: "20"},
                { problem: "6 x 8 =", answer: "48"},
                { problem: "5 x 10 =", answer: "50"},
                { problem: "6 x 2 =", answer: "12"},
                { problem: "6 x 9 =", answer: "54"},
                
                
              ]}
              nxtlvl={'/wild2m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1m2" render={(props) => (
              <WildGameOne
              answerset = {[
                { problem: "5 x 8 =", answer: "40"},
                { problem: "6 x 5 =", answer: "30"},
                { problem: "10 x 6 =", answer: "60"},
                { problem: "5 x 3 =", answer: "15"},
                { problem: "6 x 7 =", answer: "42"},
                { problem: "5 x 2 =", answer: "10"},
                { problem: "6 x 9 =", answer: "54"},
                { problem: "5 x 7 =", answer: "35"},
                
                
              ]}
              nxtlvl={'/wild2m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1d" render={(props) => (
              <WildGameOne
              answerset = {[
                { problem: "25 ÷ 5 =", answer: "5"},
                { problem: "42 ÷ 6 =", answer: "7"},
                { problem: "15 ÷ 5 =", answer: "3"},
                { problem: "24 ÷ 6 =", answer: "4"},
                { problem: "45 ÷ 5 =", answer: "9"},
                { problem: "18 ÷ 6 =", answer: "3"},
                { problem: "20 ÷ 5 =", answer: "4"},
                { problem: "54 ÷ 6 =", answer: "9"},
                
                
              ]}
              nxtlvl={'/wild2d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild1d2" render={(props) => (
              <WildGameOne
              answerset = {[
                  { problem: "30 ÷ 5 =", answer: "6"},
                  { problem: "48 ÷ 6 =", answer: "8"},
                  { problem: "50 ÷ 5 =", answer: "10"},
                  { problem: "12 ÷ 6 =", answer: "2"},
                  { problem: "35 ÷ 5 =", answer: "7"},
                  { problem: "36 ÷ 6 =", answer: "6"},
                  { problem: "40 ÷ 5 =", answer: "8"},
                  { problem: "30 ÷ 6 =", answer: "5"},
                
                
              ]}
              nxtlvl={'/wild2d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/wild2a2" render={(props) => (
              <HotGameTwo
              answerset = {[
                { problem: "10 + 2 =", answer: "12"},
                { problem: "12 + 5 =", answer: "7"},
                { problem: "13 + 4 =", answer: "17"},
                { problem: "14+ 2 =", answer: "16"},
                { problem: "10 + 7 =", answer: "4"},
                { problem: "4 + 13 =", answer: "17"},
                { problem: "18 + 2 =", answer: "20"},
                { problem: "12+ 4 =", answer: "16"},
                
                
              ]}
              nxtlvl={'/wild3a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild2s" render={(props) => (
              <WildGameTwo
              answerset = {[
                { problem: "7 - 5 =", answer: "2"},
                { problem: "6 - 6 =", answer: "0"},
                { problem: "10 - 7 =", answer: "3"},
                { problem: "8 - 3 =", answer: "5"},
                { problem: "6 - 4 =", answer: "2"},
                { problem: "4 - 2 =", answer: "2"},
                { problem: "6 - 3 =", answer: "3"},
                { problem: "7 - 3 =", answer: "4"},
                
              ]}
              nxtlvl={'/wild3s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild2s2" render={(props) => (
              <WildGameTwo
              answerset = {[
                { problem: "14 - 8 =", answer: "6"},
                { problem: "11 - 9 =", answer: "2"},
                { problem: "17 - 6 =", answer: "11"},
                { problem: "13 - 8 =", answer: "5"},
                { problem: "14 - 10 =", answer: "4"},
                { problem: "10 - 10 =", answer: "0"},
                { problem: "16 - 6 =", answer: "10"},
                { problem: "16 - 10 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild3s2'}
              gButton={'/planetspagestwo'}
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
          <Route exact path="/wild2m2" render={(props) => (
              <WildGameTwo
              answerset = {[
                { problem: "5 x 8 =", answer: "40"},
                { problem: "6 x 5 =", answer: "30"},
                { problem: "10 x 6 =", answer: "60"},
                { problem: "5 x 3 =", answer: "15"},
                { problem: "6 x 7 =", answer: "42"},
                { problem: "5 x 2 =", answer: "10"},
                { problem: "6 x 9 =", answer: "54"},
                { problem: "5 x 7 =", answer: "35"},
                
                
              ]}
              nxtlvl={'/wild3m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      
      <section>
          <Route exact path="/wild2d" render={(props) => (
              <WildGameTwo
              answerset = {[
                { problem: "25 ÷ 5 =", answer: "5"},
                { problem: "42 ÷ 6 =", answer: "7"},
                { problem: "15 ÷ 5 =", answer: "3"},
                { problem: "24 ÷ 6 =", answer: "4"},
                { problem: "45 ÷ 5 =", answer: "9"},
                { problem: "18 ÷ 6 =", answer: "3"},
                { problem: "20 ÷ 5 =", answer: "4"},
                { problem: "54 ÷ 6 =", answer: "9"},
              ]}
              nxtlvl={'/wild3d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild2d2" render={(props) => (
              <WildGameTwo
              answerset = {[
                  { problem: "30 ÷ 5 =", answer: "6"},
                  { problem: "48 ÷ 6 =", answer: "8"},
                  { problem: "50 ÷ 5 =", answer: "10"},
                  { problem: "12 ÷ 6 =", answer: "2"},
                  { problem: "35 ÷ 5 =", answer: "7"},
                  { problem: "36 ÷ 6 =", answer: "6"},
                  { problem: "40 ÷ 5 =", answer: "8"},
                  { problem: "30 ÷ 6 =", answer: "5"},
                
                
              ]}
              nxtlvl={'/wild3d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/wild3a2" render={(props) => (
              <HotGameThree
              answerset = {[
                { problem: "10 + 2 =", answer: "12"},
                { problem: "12 + 5 =", answer: "7"},
                { problem: "13 + 4 =", answer: "17"},
                { problem: "14+ 2 =", answer: "16"},
                { problem: "10 + 7 =", answer: "4"},
                { problem: "4 + 13 =", answer: "17"},
                { problem: "18 + 2 =", answer: "20"},
                { problem: "12+ 4 =", answer: "16"},
                
                
              ]}
              nxtlvl={'/wilda2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3s" render={(props) => (
              <WildGameThree
              answerset = {[
                { problem: "7 - 5 =", answer: "2"},
                { problem: "6 - 6 =", answer: "0"},
                { problem: "10 - 7 =", answer: "3"},
                { problem: "8 - 3 =", answer: "5"},
                { problem: "6 - 4 =", answer: "2"},
                { problem: "4 - 2 =", answer: "2"},
                { problem: "6 - 3 =", answer: "3"},
                { problem: "7 - 3 =", answer: "4"},
                
              ]}
              nxtlvl={'/wild4s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3s2" render={(props) => (
              <WildGameThree
              answerset = {[
                { problem: "14 - 8 =", answer: "6"},
                { problem: "11 - 9 =", answer: "2"},
                { problem: "17 - 6 =", answer: "11"},
                { problem: "13 - 8 =", answer: "5"},
                { problem: "14 - 10 =", answer: "4"},
                { problem: "10 - 10 =", answer: "0"},
                { problem: "16 - 6 =", answer: "10"},
                { problem: "16 - 10 =", answer: "6"},
                
              ]}
              nxtlvl={'/wild4s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3m" render={(props) => (
              <WildGameThree
              answerset = {[
                { problem: "5 x 3 =", answer: "15"},
                { problem: "6 x 6 =", answer: "36"},
                { problem: "5 x 5 =", answer: "25"},
                { problem: "5 x 4 =", answer: "20"},
                { problem: "6 x 8 =", answer: "48"},
                { problem: "5 x 10 =", answer: "50"},
                { problem: "6 x 2 =", answer: "12"},
                { problem: "6 x 9 =", answer: "54"},
                
              ]}
              nxtlvl={'/wild4m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3m2" render={(props) => (
              <WildGameThree
              answerset = {[
                { problem: "5 x 8 =", answer: "40"},
                { problem: "6 x 5 =", answer: "30"},
                { problem: "10 x 6 =", answer: "60"},
                { problem: "5 x 3 =", answer: "15"},
                { problem: "6 x 7 =", answer: "42"},
                { problem: "5 x 2 =", answer: "10"},
                { problem: "6 x 9 =", answer: "54"},
                { problem: "5 x 7 =", answer: "35"},
                
                
              ]}
              nxtlvl={'/wild4m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3d" render={(props) => (
              <WildGameThree
              answerset = {[
                { problem: "25 ÷ 5 =", answer: "5"},
                { problem: "42 ÷ 6 =", answer: "7"},
                { problem: "15 ÷ 5 =", answer: "3"},
                { problem: "24 ÷ 6 =", answer: "4"},
                { problem: "45 ÷ 5 =", answer: "9"},
                { problem: "18 ÷ 6 =", answer: "3"},
                { problem: "20 ÷ 5 =", answer: "4"},
                { problem: "54 ÷ 6 =", answer: "9"},
                
              ]}
              nxtlvl={'/wild4d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild3d2" render={(props) => (
              <WildGameThree
              answerset = {[
                  { problem: "30 ÷ 5 =", answer: "6"},
                  { problem: "48 ÷ 6 =", answer: "8"},
                  { problem: "50 ÷ 5 =", answer: "10"},
                  { problem: "12 ÷ 6 =", answer: "2"},
                  { problem: "35 ÷ 5 =", answer: "7"},
                  { problem: "36 ÷ 6 =", answer: "6"},
                  { problem: "40 ÷ 5 =", answer: "8"},
                  { problem: "30 ÷ 6 =", answer: "5"},
                
                
              ]}
              nxtlvl={'/wild4d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/wild4a2" render={(props) => (
              <HotGameFour
              answerset = {[
                { problem: "10 + 2 =", answer: "12"},
                { problem: "12 + 5 =", answer: "7"},
                { problem: "13 + 4 =", answer: "17"},
                { problem: "14+ 2 =", answer: "16"},
                { problem: "10 + 7 =", answer: "4"},
                { problem: "4 + 13 =", answer: "17"},
                { problem: "18 + 2 =", answer: "20"},
                { problem: "12+ 4 =", answer: "16"},
                
                
              ]}
              nxtlvl={'/coz1a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4s" render={(props) => (
              <WildGameFour
              answerset = {[
                { problem: "7 - 5 =", answer: "2"},
                { problem: "6 - 6 =", answer: "0"},
                { problem: "10 - 7 =", answer: "3"},
                { problem: "8 - 3 =", answer: "5"},
                { problem: "6 - 4 =", answer: "2"},
                { problem: "4 - 2 =", answer: "2"},
                { problem: "6 - 3 =", answer: "3"},
                { problem: "7 - 3 =", answer: "4"},
                
              ]}
              nxtlvl={'/coz1s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4s2" render={(props) => (
              <WildGameTwo
              answerset = {[
                { problem: "14 - 8 =", answer: "6"},
                { problem: "11 - 9 =", answer: "2"},
                { problem: "17 - 6 =", answer: "11"},
                { problem: "13 - 8 =", answer: "5"},
                { problem: "14 - 10 =", answer: "4"},
                { problem: "10 - 10 =", answer: "0"},
                { problem: "16 - 6 =", answer: "10"},
                { problem: "16 - 10 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz2s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4m" render={(props) => (
              <WildGameFour
              answerset = {[
                { problem: "5 x 3 =", answer: "15"},
                { problem: "6 x 6 =", answer: "36"},
                { problem: "5 x 5 =", answer: "25"},
                { problem: "5 x 4 =", answer: "20"},
                { problem: "6 x 8 =", answer: "48"},
                { problem: "5 x 10 =", answer: "50"},
                { problem: "6 x 2 =", answer: "12"},
                { problem: "6 x 9 =", answer: "54"},
                
              ]}
              nxtlvl={'/coz1m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4m2" render={(props) => (
              <WildGameFour
              answerset = {[
                { problem: "5 x 8 =", answer: "40"},
                { problem: "6 x 5 =", answer: "30"},
                { problem: "10 x 6 =", answer: "60"},
                { problem: "5 x 3 =", answer: "15"},
                { problem: "6 x 7 =", answer: "42"},
                { problem: "5 x 2 =", answer: "10"},
                { problem: "6 x 9 =", answer: "54"},
                { problem: "5 x 7 =", answer: "35"},
                
                
              ]}
              nxtlvl={'/coz1m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4d" render={(props) => (
              <WildGameFour
              answerset = {[
                { problem: "25 ÷ 5 =", answer: "5"},
                { problem: "42 ÷ 6 =", answer: "7"},
                { problem: "15 ÷ 5 =", answer: "3"},
                { problem: "24 ÷ 6 =", answer: "4"},
                { problem: "45 ÷ 5 =", answer: "9"},
                { problem: "18 ÷ 6 =", answer: "3"},
                { problem: "20 ÷ 5 =", answer: "4"},
                { problem: "54 ÷ 6 =", answer: "9"},
                
              ]}
              nxtlvl={'/coz1d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/wild4d2" render={(props) => (
              <WildGameFour
              answerset = {[
                  { problem: "30 ÷ 5 =", answer: "6"},
                  { problem: "48 ÷ 6 =", answer: "8"},
                  { problem: "50 ÷ 5 =", answer: "10"},
                  { problem: "12 ÷ 6 =", answer: "2"},
                  { problem: "35 ÷ 5 =", answer: "7"},
                  { problem: "36 ÷ 6 =", answer: "6"},
                  { problem: "40 ÷ 5 =", answer: "8"},
                  { problem: "30 ÷ 6 =", answer: "5"},
                
                
              ]}
              nxtlvl={'/coz1d2'}
              gButton={'/planetspaged2'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/coz1" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "10 + 5 =", answer: "15"},
                { problem: "10 + 10 =", answer: "20"},
                { problem: "9 + 4 =", answer: "13"},
                { problem: "10 + 8 =", answer: "18"},
                { problem: "9 + 8 =", answer: "17"},
                { problem: "9 + 9 =", answer: "18"},
                { problem: "10 + 7 =", answer: "17"},
                { problem: "10 + 9 =", answer: "19"},
                
              ]}
              nxtlvl={'/coz2'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>
                
      </section>
      <section>
          <Route exact path="/coz1a2" render={(props) => (
              <HotGameOne
              answerset = {[
                { problem: "10 + 9 =", answer: "19"},
                { problem: "14 + 6 =", answer: "20"},
                { problem: "12 + 7 =", answer: "19"},
                { problem: "13 + 5 =", answer: "18"},
                { problem: "11 + 3 =", answer: "14"},
                { problem: "16 + 2 =", answer: "18"},
                { problem: "13 + 6 =", answer: "19"},
                { problem: "2 + 18 =", answer: "20"},
                
                
              ]}
              nxtlvl={'/coz2a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/coz1s" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "5 - 0 =", answer: "0"},
                { problem: "9 - 3 =", answer: "6"},
                { problem: "8 - 5 =", answer: "3"},
                { problem: "6 - 5 =", answer: "1"},
                { problem: "8 - 2 =", answer: "6"},
                { problem: "9 - 7 =", answer: "2"},
                { problem: "10 - 8 =", answer: "2"},
                { problem: "5 - 4 =", answer: "1"},
              ]}
              nxtlvl={'/coz2s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
                
      </section>
      <section>
          <Route exact path="/coz1s2" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "13 - 7 =", answer: "6"},
                { problem: "11 - 8 =", answer: "3"},
                { problem: "17 - 4 =", answer: "3"},
                { problem: "19 - 7 =", answer: "12"},
                { problem: "11 - 4 =", answer: "7"},
                { problem: "14 - 9 =", answer: "5"},
                { problem: "17 - 8 =", answer: "9"},
                { problem: "20 - 9 =", answer: "11"},
              ]}
              nxtlvl={'/coz2s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
                
      </section>
      <section>
          <Route exact path="/coz1m" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "7 x 7 =", answer: "49"},
                { problem: "8 x 4 =", answer: "32"},
                { problem: "7 x 3 =", answer: "21"},
                { problem: "8 x 6 =", answer: "48"},
                { problem: "7 x 8 =", answer: "56"},
                { problem: "8 x 8 =", answer: "64"},
                { problem: "7 x 5 =", answer: "35"},
                { problem: "8 x 9 =", answer: "72"},
                
              ]}
              nxtlvl={'/coz2m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
                
      </section>
      <section>
          <Route exact path="/coz1m2" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "7 x 4 =", answer: "28"},
                { problem: "8 x 3 =", answer: "24"},
                { problem: "7 x 9 =", answer: "63"},
                { problem: "9 x 8 =", answer: "72"},
                { problem: "7 x 6 =", answer: "42"},
                { problem: "8 x 5 =", answer: "40"},
                { problem: "10 x 8 =", answer: "80"},
                { problem: "8 x 7 =", answer: "56"},
                
              ]}
              nxtlvl={'/coz2m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
                
      </section>
      <section>
          <Route exact path="/coz1d" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "42 ÷ 7 =", answer: "6"},
                { problem: "56 ÷ 8 =", answer: "7"},
                { problem: "21 ÷ 7 =", answer: "3"},
                { problem: "32 ÷ 8 =", answer: "4"},
                { problem: "49 ÷ 7 =", answer: "7"},
                { problem: "80 ÷ 8 =", answer: "10"},
                { problem: "35 ÷ 7 =", answer: "5"},
                { problem: "24 ÷ 8 =", answer: "3"},
                
              ]}
              nxtlvl={'/coz2d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
                
      </section>
      <section>
          <Route exact path="/coz1d2" render={(props) => (
              <CozGameOne
              answerset = {[
                { problem: "63 ÷ 7 =", answer: "9"},
                { problem: "64 ÷ 8 =", answer: "8"},
                { problem: "28 ÷ 7 =", answer: "4"},
                { problem: "16 ÷ 8 =", answer: "2"},
                { problem: "56 ÷ 7 =", answer: "8"},
                { problem: "40 ÷ 8 =", answer: "5"},
                { problem: "14 ÷ 7 =", answer: "2"},
                { problem: "48 ÷ 8 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz2d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/coz2a2" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "10 + 9 =", answer: "19"},
                { problem: "14 + 6 =", answer: "20"},
                { problem: "12 + 7 =", answer: "19"},
                { problem: "13 + 5 =", answer: "18"},
                { problem: "11 + 3 =", answer: "14"},
                { problem: "16 + 2 =", answer: "18"},
                { problem: "13 + 6 =", answer: "19"},
                { problem: "2 + 18 =", answer: "20"},
                
                
              ]}
              nxtlvl={'/coz3a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/coz2s" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "5 - 0 =", answer: "0"},
                { problem: "9 - 3 =", answer: "6"},
                { problem: "8 - 5 =", answer: "3"},
                { problem: "6 - 5 =", answer: "1"},
                { problem: "8 - 2 =", answer: "6"},
                { problem: "9 - 7 =", answer: "2"},
                { problem: "10 - 8 =", answer: "2"},
                { problem: "5 - 4 =", answer: "1"},
                
              ]}
              nxtlvl={'/coz3s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/coz2s2" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "13 - 7 =", answer: "6"},
                { problem: "11 - 8 =", answer: "3"},
                { problem: "17 - 4 =", answer: "3"},
                { problem: "19 - 7 =", answer: "12"},
                { problem: "11 - 4 =", answer: "7"},
                { problem: "14 - 9 =", answer: "5"},
                { problem: "17 - 8 =", answer: "9"},
                { problem: "20 - 9 =", answer: "11"},
              ]}
              nxtlvl={'/coz3s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
                
      </section>
      
      <section>
      <Route exact path="/coz2m" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "7 x 7 =", answer: "49"},
                { problem: "8 x 4 =", answer: "32"},
                { problem: "7 x 3 =", answer: "21"},
                { problem: "8 x 6 =", answer: "48"},
                { problem: "7 x 8 =", answer: "56"},
                { problem: "8 x 8 =", answer: "64"},
                { problem: "7 x 5 =", answer: "35"},
                { problem: "8 x 9 =", answer: "72"},
              ]}
              nxtlvl={'/coz3m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/coz2m2" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "7 x 4 =", answer: "28"},
                { problem: "8 x 3 =", answer: "24"},
                { problem: "7 x 9 =", answer: "63"},
                { problem: "9 x 8 =", answer: "72"},
                { problem: "7 x 6 =", answer: "42"},
                { problem: "8 x 5 =", answer: "40"},
                { problem: "10 x 8 =", answer: "80"},
                { problem: "8 x 7 =", answer: "56"},
                
              ]}
              nxtlvl={'/coz3m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
                
      </section>
      
      <section>
      <Route exact path="/coz2d" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "42 ÷ 7 =", answer: "6"},
                { problem: "56 ÷ 8 =", answer: "7"},
                { problem: "21 ÷ 7 =", answer: "3"},
                { problem: "32 ÷ 8 =", answer: "4"},
                { problem: "49 ÷ 7 =", answer: "7"},
                { problem: "80 ÷ 8 =", answer: "10"},
                { problem: "35 ÷ 7 =", answer: "5"},
                { problem: "24 ÷ 8 =", answer: "3"},
                
              ]}
              nxtlvl={'/coz3d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>
      </section>
      <section>
          <Route exact path="/coz2d2" render={(props) => (
              <CozGameTwo
              answerset = {[
                { problem: "63 ÷ 7 =", answer: "9"},
                { problem: "64 ÷ 8 =", answer: "8"},
                { problem: "28 ÷ 7 =", answer: "4"},
                { problem: "16 ÷ 8 =", answer: "2"},
                { problem: "56 ÷ 7 =", answer: "8"},
                { problem: "40 ÷ 8 =", answer: "5"},
                { problem: "14 ÷ 7 =", answer: "2"},
                { problem: "48 ÷ 8 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz3d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/coz3a2" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "10 + 9 =", answer: "19"},
                { problem: "14 + 6 =", answer: "20"},
                { problem: "12 + 7 =", answer: "19"},
                { problem: "13 + 5 =", answer: "18"},
                { problem: "11 + 3 =", answer: "14"},
                { problem: "16 + 2 =", answer: "18"},
                { problem: "13 + 6 =", answer: "19"},
                { problem: "2 + 18 =", answer: "20"},
                
                
              ]}
              nxtlvl={'/coz4a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/coz3s" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "5 - 0 =", answer: "0"},
                { problem: "9 - 3 =", answer: "6"},
                { problem: "8 - 5 =", answer: "3"},
                { problem: "6 - 5 =", answer: "1"},
                { problem: "8 - 2 =", answer: "6"},
                { problem: "9 - 7 =", answer: "2"},
                { problem: "10 - 8 =", answer: "2"},
                { problem: "5 - 4 =", answer: "1"},
                
              ]}
              nxtlvl={'/coz4s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
          <Route exact path="/coz3s2" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "13 - 7 =", answer: "6"},
                { problem: "11 - 8 =", answer: "3"},
                { problem: "17 - 4 =", answer: "3"},
                { problem: "19 - 7 =", answer: "12"},
                { problem: "11 - 4 =", answer: "7"},
                { problem: "14 - 9 =", answer: "5"},
                { problem: "17 - 8 =", answer: "9"},
                { problem: "20 - 9 =", answer: "11"},
              ]}
              nxtlvl={'/coz4s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
                
      </section>
      <section>
      <Route exact path="/coz3m" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "7 x 7 =", answer: "49"},
                { problem: "8 x 4 =", answer: "32"},
                { problem: "7 x 3 =", answer: "21"},
                { problem: "8 x 6 =", answer: "48"},
                { problem: "7 x 8 =", answer: "56"},
                { problem: "8 x 8 =", answer: "64"},
                { problem: "7 x 5 =", answer: "35"},
                { problem: "8 x 9 =", answer: "72"},
              ]}
              nxtlvl={'/coz4m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
          <Route exact path="/coz3m2" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "7 x 4 =", answer: "28"},
                { problem: "8 x 3 =", answer: "24"},
                { problem: "7 x 9 =", answer: "63"},
                { problem: "9 x 8 =", answer: "72"},
                { problem: "7 x 6 =", answer: "42"},
                { problem: "8 x 5 =", answer: "40"},
                { problem: "10 x 8 =", answer: "80"},
                { problem: "8 x 7 =", answer: "56"},
                
              ]}
              nxtlvl={'/coz4m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
                
      </section>
      <section>
      <Route exact path="/coz3d" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "42 ÷ 7 =", answer: "6"},
                { problem: "56 ÷ 8 =", answer: "7"},
                { problem: "21 ÷ 7 =", answer: "3"},
                { problem: "32 ÷ 8 =", answer: "4"},
                { problem: "49 ÷ 7 =", answer: "7"},
                { problem: "80 ÷ 8 =", answer: "10"},
                { problem: "35 ÷ 7 =", answer: "5"},
                { problem: "24 ÷ 8 =", answer: "3"},
              ]}
              nxtlvl={'/coz4d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>

      </section>
      <section>
          <Route exact path="/coz3d2" render={(props) => (
              <CozGameThree
              answerset = {[
                { problem: "63 ÷ 7 =", answer: "9"},
                { problem: "64 ÷ 8 =", answer: "8"},
                { problem: "28 ÷ 7 =", answer: "4"},
                { problem: "16 ÷ 8 =", answer: "2"},
                { problem: "56 ÷ 7 =", answer: "8"},
                { problem: "40 ÷ 8 =", answer: "5"},
                { problem: "14 ÷ 7 =", answer: "2"},
                { problem: "48 ÷ 8 =", answer: "6"},
                
              ]}
              nxtlvl={'/coz3d2'}
              gButton={'/planetspaged2'}
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
          <Route exact path="/coz4a2" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "10 + 9 =", answer: "19"},
                { problem: "14 + 6 =", answer: "20"},
                { problem: "12 + 7 =", answer: "19"},
                { problem: "13 + 5 =", answer: "18"},
                { problem: "11 + 3 =", answer: "14"},
                { problem: "16 + 2 =", answer: "18"},
                { problem: "13 + 6 =", answer: "19"},
                { problem: "2 + 18 =", answer: "20"},
                
                
              ]}
              nxtlvl={'/pup1a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/coz4s" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "5 - 0 =", answer: "0"},
                { problem: "9 - 3 =", answer: "6"},
                { problem: "8 - 5 =", answer: "3"},
                { problem: "6 - 5 =", answer: "1"},
                { problem: "8 - 2 =", answer: "6"},
                { problem: "9 - 7 =", answer: "2"},
                { problem: "10 - 8 =", answer: "2"},
                { problem: "5 - 4 =", answer: "1"},
                
              ]}
              nxtlvl={'/pup1s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
          <Route exact path="/coz4s2" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "13 - 7 =", answer: "6"},
                { problem: "11 - 8 =", answer: "3"},
                { problem: "17 - 4 =", answer: "3"},
                { problem: "19 - 7 =", answer: "12"},
                { problem: "11 - 4 =", answer: "7"},
                { problem: "14 - 9 =", answer: "5"},
                { problem: "17 - 8 =", answer: "9"},
                { problem: "20 - 9 =", answer: "11"},
              ]}
              nxtlvl={'/pup1s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>
                
      </section>
      <section>
      <Route exact path="/coz4m" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "7 x 7 =", answer: "49"},
                { problem: "8 x 4 =", answer: "32"},
                { problem: "7 x 3 =", answer: "21"},
                { problem: "8 x 6 =", answer: "48"},
                { problem: "7 x 8 =", answer: "56"},
                { problem: "8 x 8 =", answer: "64"},
                { problem: "7 x 5 =", answer: "35"},
                { problem: "8 x 9 =", answer: "72"},
              ]}
              nxtlvl={'/pup1m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
          <Route exact path="/coz4m2" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "7 x 4 =", answer: "28"},
                { problem: "8 x 3 =", answer: "24"},
                { problem: "7 x 9 =", answer: "63"},
                { problem: "9 x 8 =", answer: "72"},
                { problem: "7 x 6 =", answer: "42"},
                { problem: "8 x 5 =", answer: "40"},
                { problem: "10 x 8 =", answer: "80"},
                { problem: "8 x 7 =", answer: "56"},
                
              ]}
              nxtlvl={'/pup1m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>
                
      </section>
      <section>
      <Route exact path="/coz4d" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "42 ÷ 7 =", answer: "6"},
                { problem: "56 ÷ 8 =", answer: "7"},
                { problem: "21 ÷ 7 =", answer: "3"},
                { problem: "32 ÷ 8 =", answer: "4"},
                { problem: "49 ÷ 7 =", answer: "7"},
                { problem: "80 ÷ 8 =", answer: "10"},
                { problem: "35 ÷ 7 =", answer: "5"},
                { problem: "24 ÷ 8 =", answer: "3"},
              ]}
              nxtlvl={'/pup1d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>

      </section>
      <section>
          <Route exact path="/coz4d2" render={(props) => (
              <CozGameFour
              answerset = {[
                { problem: "63 ÷ 7 =", answer: "9"},
                { problem: "64 ÷ 8 =", answer: "8"},
                { problem: "28 ÷ 7 =", answer: "4"},
                { problem: "16 ÷ 8 =", answer: "2"},
                { problem: "56 ÷ 7 =", answer: "8"},
                { problem: "40 ÷ 8 =", answer: "5"},
                { problem: "14 ÷ 7 =", answer: "2"},
                { problem: "48 ÷ 8 =", answer: "6"},
                
              ]}
              nxtlvl={'/pup1d2'}
              gButton={'/planetspaged2'}
                {...props} />
                )}/>
                
      </section>
      <section>
      <Route exact path="/pup1" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "6 + 7 =", answer: "13"},
                { problem: "7 + 6 =", answer: "13"},
                { problem: "9 + 3 =", answer: "12"},
                { problem: "10 + 4 =", answer: "14"},
                { problem: "5 + 8 =", answer: "13"},
                { problem: "7 + 5 =", answer: "12"},
                { problem: "8 + 9 =", answer: "17"},
                { problem: "7 + 10 =", answer: "17"},
                
              ]}
              nxtlvl={'/pup2'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
          <Route exact path="/pup1a2" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "19 + 1 =", answer: "20"},
                { problem: "13 + 2 =", answer: "15"},
                { problem: "12 + 6 =", answer: "18"},
                { problem: "17 + 2 =", answer: "19"},
                { problem: "13 + 7 =", answer: "20"},
                { problem: "11 + 7 =", answer: "18"},
                { problem: "16 + 3 =", answer: "19"},
                { problem: "15+ 2 =", answer: "17"},
                
                
              ]}
              nxtlvl={'/pup2a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/pup1s" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "10 - 6 =", answer: "4"},
                { problem: "7 - 7 =", answer: "0"},
                { problem: "10 - 4 =", answer: "6"},
                { problem: "10 - 10 =", answer: "0"},
                { problem: "9 - 6 =", answer: "3"},
                { problem: "10 - 4 =", answer: "6"},
                { problem: "9 - 2 =", answer: "7"},
                { problem: "8 - 7 =", answer: "1"},
                
                
                
              ]}
              nxtlvl={'/pup2s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup1s2" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "14 - 7 =", answer: "7"},
                { problem: "10 - 7 =", answer: "3"},
                { problem: "14 - 6 =", answer: "8"},
                { problem: "16 - 3 =", answer: "3"},
                { problem: "19 - 8 =", answer: "11"},
                { problem: "20 - 6 =", answer: "14"},
                { problem: "12 - 10 =", answer: "2"},
                { problem: "19 - 9 =", answer: "10"},
                
                
                
              ]}
              nxtlvl={'/pup2s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup1m" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "9 x 3 =", answer: "27"},
                { problem: "10 x 3 =", answer: "30"},
                { problem: "9 x 9 =", answer: "81"},
                { problem: "10 x 7 =", answer: "70"},
                { problem: "9 x 7 =", answer: "63"},
                { problem: "10 x 10 =", answer: "100"},
                { problem: "9 x 6  =", answer: "54"},
                { problem: "10 x 9 =", answer: "90"}
                
                
              ]}
              nxtlvl={'/pup2m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup1m2" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "9 x 6 =", answer: "54"},
                { problem: "10 x 2 =", answer: "20"},
                { problem: "9 x 5 =", answer: "45"},
                { problem: "10 x 4 =", answer: "40"},
                { problem: "9 x 10 =", answer: "90"},
                { problem: "10 x 5 =", answer: "50"},
                { problem: "9 x 4 =", answer: "36"},
                { problem: "10 x 10 =", answer: "100"},
                
                
              ]}
              nxtlvl={'/pup2m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup1d" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "45 ÷ 9 =", answer: "5"},
                { problem: "30 ÷ 10 =", answer: "3"},
                { problem: "18 ÷ 9 =", answer: "2"},
                { problem: "50 ÷ 10 =", answer: "5"},
                { problem: "72 ÷ 9 =", answer: "8"},
                { problem: "70 ÷ 10 =", answer: "7"},
                { problem: "81 ÷ 9 =", answer: "9"},
                { problem: "100 ÷ 10 =", answer: "10"},
                
              ]}
              nxtlvl={'/pup2d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup1d2" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "27 ÷ 9 =", answer: "3"},
                { problem: "40 ÷ 10 =", answer: "4"},
                { problem: "54 ÷ 9 =", answer: "6"},
                { problem: "80 ÷ 10 =", answer: "8"},
                { problem: "90 ÷ 9 =", answer: "9"},
                { problem: "20 ÷ 10 =", answer: "2"},
                { problem: "63 ÷ 9 =", answer: "7"},
                { problem: "90 ÷ 10 =", answer: "9"},
                
              ]}
              nxtlvl={'/pup2d2'}
              gButton={'/planetspaged2'}
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
              nxtlvl={'/pup3'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
          <Route exact path="/pup2a2" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "19 + 1 =", answer: "20"},
                { problem: "13 + 2 =", answer: "15"},
                { problem: "12 + 6 =", answer: "18"},
                { problem: "17 + 2 =", answer: "19"},
                { problem: "13 + 7 =", answer: "20"},
                { problem: "11 + 7 =", answer: "18"},
                { problem: "16 + 3 =", answer: "19"},
                { problem: "15+ 2 =", answer: "17"},
                
                
              ]}
              nxtlvl={'/pup3a2'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/pup2s" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "10 - 6 =", answer: "4"},
                { problem: "7 - 7 =", answer: "0"},
                { problem: "10 - 4 =", answer: "6"},
                { problem: "10 - 10 =", answer: "0"},
                { problem: "9 - 6 =", answer: "3"},
                { problem: "10 - 4 =", answer: "6"},
                { problem: "9 - 2 =", answer: "7"},
                { problem: "8 - 7 =", answer: "1"},
                
                
              ]}
              nxtlvl={'/pup3s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup2s2" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "14 - 7 =", answer: "7"},
                { problem: "10 - 7 =", answer: "3"},
                { problem: "14 - 6 =", answer: "8"},
                { problem: "16 - 3 =", answer: "3"},
                { problem: "19 - 8 =", answer: "11"},
                { problem: "20 - 6 =", answer: "14"},
                { problem: "12 - 10 =", answer: "2"},
                { problem: "19 - 9 =", answer: "10"},
                
                
                
              ]}
              nxtlvl={'/pup3s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>

      </section>

      <section>
      <Route exact path="/pup2m" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "9 x 3 =", answer: "27"},
                { problem: "10 x 3 =", answer: "30"},
                { problem: "9 x 9 =", answer: "81"},
                { problem: "10 x 7 =", answer: "70"},
                { problem: "9 x 7 =", answer: "63"},
                { problem: "10 x 10 =", answer: "100"},
                { problem: "9 x 6  =", answer: "54"},
                { problem: "10 x 9 =", answer: "90"}
                
              ]}
              nxtlvl={'/pup3m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup2m2" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "9 x 6 =", answer: "54"},
                { problem: "10 x 2 =", answer: "20"},
                { problem: "9 x 5 =", answer: "45"},
                { problem: "10 x 4 =", answer: "40"},
                { problem: "9 x 10 =", answer: "90"},
                { problem: "10 x 5 =", answer: "50"},
                { problem: "9 x 4 =", answer: "36"},
                { problem: "10 x 10 =", answer: "100"},
                
                
              ]}
              nxtlvl={'/pup3m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup2d" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "45 ÷ 9 =", answer: "5"},
                { problem: "30 ÷ 10 =", answer: "3"},
                { problem: "18 ÷ 9 =", answer: "2"},
                { problem: "50 ÷ 10 =", answer: "5"},
                { problem: "72 ÷ 9 =", answer: "8"},
                { problem: "70 ÷ 10 =", answer: "7"},
                { problem: "81 ÷ 9 =", answer: "9"},
                { problem: "100 ÷ 10 =", answer: "10"},
                
              ]}
              gButton={'/planetspaged'}
              nxtlvl={'/pup3d'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup2d2" render={(props) => (
              <PupGameTwo
              answerset = {[
                { problem: "27 ÷ 9 =", answer: "3"},
                { problem: "40 ÷ 10 =", answer: "4"},
                { problem: "54 ÷ 9 =", answer: "6"},
                { problem: "80 ÷ 10 =", answer: "8"},
                { problem: "90 ÷ 9 =", answer: "9"},
                { problem: "20 ÷ 10 =", answer: "2"},
                { problem: "63 ÷ 9 =", answer: "7"},
                { problem: "90 ÷ 10 =", answer: "9"},
                
              ]}
              nxtlvl={'/pup3d2'}
              gButton={'/planetspaged2'}
                {...props} />
                )}/>

      </section>
      

      <section>
      <Route exact path="/pup3" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "10 - 6 =", answer: "4"},
                { problem: "7 - 7 =", answer: "0"},
                { problem: "10 - 4 =", answer: "6"},
                { problem: "10 - 10 =", answer: "0"},
                { problem: "9 - 6 =", answer: "3"},
                { problem: "10 - 4 =", answer: "6"},
                { problem: "9 - 2 =", answer: "7"},
                { problem: "8 - 7 =", answer: "1"},
                
                
              ]}
              nxtlvl={'/pup4'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
      <section>
          <Route exact path="/pup3a2" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "19 + 1 =", answer: "20"},
                { problem: "13 + 2 =", answer: "15"},
                { problem: "12 + 6 =", answer: "18"},
                { problem: "17 + 2 =", answer: "19"},
                { problem: "13 + 7 =", answer: "20"},
                { problem: "11 + 7 =", answer: "18"},
                { problem: "16 + 3 =", answer: "19"},
                { problem: "15 + 2 =", answer: "17"},
                
                
              ]}
              nxtlvl={'/pup4a2'}
              gButton={'/planetspageatwo'}
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
              nxtlvl={'/pup4s'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup3s2" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "14 - 7 =", answer: "7"},
                { problem: "10 - 7 =", answer: "3"},
                { problem: "14 - 6 =", answer: "8"},
                { problem: "16 - 3 =", answer: "3"},
                { problem: "19 - 8 =", answer: "11"},
                { problem: "20 - 6 =", answer: "14"},
                { problem: "12 - 10 =", answer: "2"},
                { problem: "19 - 9 =", answer: "10"},
                
                
                
              ]}
              nxtlvl={'/pup4s2'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup3m" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "9 x 3 =", answer: "27"},
                { problem: "10 x 3 =", answer: "30"},
                { problem: "9 x 9 =", answer: "81"},
                { problem: "10 x 7 =", answer: "70"},
                { problem: "9 x 7 =", answer: "63"},
                { problem: "10 x 10 =", answer: "100"},
                { problem: "9 x 6  =", answer: "54"},
                { problem: "10 x 9 =", answer: "90"}
                
              ]}
              nxtlvl={'/pup4m'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup3m2" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "9 x 6 =", answer: "54"},
                { problem: "10 x 2 =", answer: "20"},
                { problem: "9 x 5 =", answer: "45"},
                { problem: "10 x 4 =", answer: "40"},
                { problem: "9 x 10 =", answer: "90"},
                { problem: "10 x 5 =", answer: "50"},
                { problem: "9 x 4 =", answer: "36"},
                { problem: "10 x 10 =", answer: "100"},
                
                
              ]}
              nxtlvl={'/pup4m2'}
              gButton={'/planetspagemtwo'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup3d" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "45 ÷ 9 =", answer: "5"},
                { problem: "30 ÷ 10 =", answer: "3"},
                { problem: "18 ÷ 9 =", answer: "2"},
                { problem: "50 ÷ 10 =", answer: "5"},
                { problem: "72 ÷ 9 =", answer: "8"},
                { problem: "70 ÷ 10 =", answer: "7"},
                { problem: "81 ÷ 9 =", answer: "9"},
                { problem: "100 ÷ 10 =", answer: "10"},
                
              ]}
              nxtlvl={'/pup4d'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup3d2" render={(props) => (
              <PupGameThree
              answerset = {[
                { problem: "27 ÷ 9 =", answer: "3"},
                { problem: "40 ÷ 10 =", answer: "4"},
                { problem: "54 ÷ 9 =", answer: "6"},
                { problem: "80 ÷ 10 =", answer: "8"},
                { problem: "90 ÷ 9 =", answer: "9"},
                { problem: "20 ÷ 10 =", answer: "2"},
                { problem: "63 ÷ 9 =", answer: "7"},
                { problem: "90 ÷ 10 =", answer: "9"},
                
              ]}
              nxtlvl={'/pup4d2'}
              gButton={'/planetspaged2'}
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
              nxtlvl={'/credits'}
              gButton={'/planetspagea'}
                {...props} />
                )}/>

      </section>
          <section>
          <Route exact path="/pup4a2" render={(props) => (
              <PupGameFour
              answerset = {[
                { problem: "19 + 1 =", answer: "20"},
                { problem: "13 + 2 =", answer: "15"},
                { problem: "12 + 6 =", answer: "18"},
                { problem: "17 + 2 =", answer: "19"},
                { problem: "13 + 7 =", answer: "20"},
                { problem: "11 + 7 =", answer: "18"},
                { problem: "16 + 3 =", answer: "19"},
                { problem: "15 + 2 =", answer: "17"},
                
                
              ]}
              nxtlvl={'/credits'}
              gButton={'/planetspageatwo'}
                {...props} />
                )}/>
      </section>
      <section>
      <Route exact path="/pup4s" render={(props) => (
              <PupGameFour
              answerset = {[
                { problem: "10 - 6 =", answer: "4"},
                { problem: "7 - 7 =", answer: "0"},
                { problem: "10 - 4 =", answer: "6"},
                { problem: "10 - 10 =", answer: "0"},
                { problem: "9 - 6 =", answer: "3"},
                { problem: "10 - 4 =", answer: "6"},
                { problem: "9 - 2 =", answer: "7"},
                { problem: "8 - 7 =", answer: "1"},
 
              ]}
              nxtlvl={'/credits'}
              gButton={'/planetspages'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup4s2" render={(props) => (
              <PupGameOne
              answerset = {[
                { problem: "14 - 7 =", answer: "7"},
                { problem: "10 - 7 =", answer: "3"},
                { problem: "14 - 6 =", answer: "8"},
                { problem: "16 - 3 =", answer: "3"},
                { problem: "19 - 8 =", answer: "11"},
                { problem: "20 - 6 =", answer: "14"},
                { problem: "12 - 10 =", answer: "2"},
                { problem: "19 - 9 =", answer: "10"},
                
                
                
              ]}
              nxtlvl={'/credits'}
              gButton={'/planetspagestwo'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup4m" render={(props) => (
              <PupGameFour
              answerset = {[
                { problem: "9 x 3 =", answer: "27"},
                { problem: "10 x 3 =", answer: "30"},
                { problem: "9 x 9 =", answer: "81"},
                { problem: "10 x 7 =", answer: "70"},
                { problem: "9 x 7 =", answer: "63"},
                { problem: "10 x 10 =", answer: "100"},
                { problem: "9 x 6  =", answer: "54"},
                { problem: "10 x 9 =", answer: "90"}
                
              ]}
              nxtlvl={'/credits'}
              gButton={'/planetspagem'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup4m2" render={(props) => (
              <PupGameFour
              answerset = {[
                { problem: "9 x 6 =", answer: "54"},
                { problem: "10 x 2 =", answer: "20"},
                { problem: "9 x 5 =", answer: "45"},
                { problem: "10 x 4 =", answer: "40"},
                { problem: "9 x 10 =", answer: "90"},
                { problem: "10 x 5 =", answer: "50"},
                { problem: "9 x 4 =", answer: "36"},
                { problem: "10 x 10 =", answer: "100"},
                
                
              ]}
              nxtlvl={'/credits'}
              gButton={'/planetspagemtwo'}
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
              nxtlvl={'/credits'}
              gButton={'/planetspaged'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/pup4d2" render={(props) => (
              <PupGameFour
              answerset = {[
                { problem: "27 ÷ 9 =", answer: "3"},
                { problem: "40 ÷ 10 =", answer: "4"},
                { problem: "54 ÷ 9 =", answer: "6"},
                { problem: "80 ÷ 10 =", answer: "8"},
                { problem: "90 ÷ 9 =", answer: "9"},
                { problem: "20 ÷ 10 =", answer: "2"},
                { problem: "63 ÷ 9 =", answer: "7"},
                { problem: "90 ÷ 10 =", answer: "9"},
                
              ]}
              nxtlvl={'/pup2d2'}
              gButton={'/planetspaged2'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/" render={(props) => (
              <MysticBadgePage
              
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/h" render={(props) => (
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
              answerset2 = {[
                { problem: "3 32r 2 =", answer: "5"},
                { problem: "6 +eg 1 =", answer: "7"},
                { problem: "4 +er 4 =", answer: "8"},
                { problem: "1 +erg 2 =", answer: "3"},
                { problem: "3 +er 1 =", answer: "4"},
                { problem: "7 er+ 3 =", answer: "10"},
                { problem: "6 er+ 3 =", answer: "9"},
                { problem: "2 +er 4 =", answer: "6"},
                
              ]}
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-play'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-ducks" render={(props) => (
              <DuckRace
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
              answerset2 = {[
                { problem: "wwww", answer: "5"},
                { problem: "ewfwef =", answer: "7"},
                { problem: "www=", answer: "8"},
                { problem: "wwww =", answer: "3"},
                { problem: "www =", answer: "4"},
                { problem: "www", answer: "10"},
                { problem: "www", answer: "9"},
                { problem: "wwww", answer: "6"},
                
              ]}
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-plays'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-duckm" render={(props) => (
              <DuckRace
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
              answerset2 = {[
                { problem: "x", answer: "5"},
                { problem: "x", answer: "7"},
                { problem: "x", answer: "8"},
                { problem: "x", answer: "3"},
                { problem: "wx", answer: "4"},
                { problem: "x", answer: "10"},
                { problem: "x", answer: "9"},
                { problem: "x", answer: "6"},
                
              ]}
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-playm'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-duckd" render={(props) => (
              <DuckRace
              answerset = {[
                { problem: "3  2 =", answer: "5"},
                { problem: "6  1 =", answer: "7"},
                { problem: "4  4 =", answer: "8"},
                { problem: "1  2 =", answer: "3"},
                { problem: "3  1 =", answer: "4"},
                { problem: "7  3 =", answer: "10"},
                { problem: "6  3 =", answer: "9"},
                { problem: "2  4 =", answer: "6"},
                
              ]}
              answerset2 = {[
                { problem: "xd", answer: "5"},
                { problem: "xd", answer: "7"},
                { problem: "xd", answer: "8"},
                { problem: "xd", answer: "3"},
                { problem: "wxd", answer: "4"},
                { problem: "xd", answer: "10"},
                { problem: "xd", answer: "9"},
                { problem: "xd", answer: "6"},
                
              ]}
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-playd'}
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
              answerset2 = {[
                { problem: "3 + fer2 =", answer: "5"},
                { problem: "6 ree+ 1 =", answer: "7"},
                { problem: "4 re+ 4 =", answer: "8"},
                { problem: "1 +e 2 =", answer: "3"},
                { problem: "3 +er 1 =", answer: "4"},
                { problem: "7 +er 3 =", answer: "10"},
                { problem: "6 +er 3 =", answer: "9"},
                { problem: "2 +er 4 =", answer: "6"},
                
              ]}
              
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-play'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-fireworkss" render={(props) => (
              <FireworksGame
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
              answerset2 = {[
                { problem: "-=", answer: "5"},
                { problem: "6 -ee+ 1 =", answer: "7"},
                { problem: "4 re+- 4 =", answer: "8"},
                { problem: "1-+e 2 =", answer: "3"},
                { problem: "3 --+er 1 =", answer: "4"},
                { problem: "7 +--er 3 =", answer: "10"},
                { problem: "6 +--er 3 =", answer: "9"},
                { problem: "2 +--er 4 =", answer: "6"},
                
              ]}
              
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-plays'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-fireworksm" render={(props) => (
              <FireworksGame
              answerset = {[
                { problem: "what color is an apple", answer: "Red"},
                { problem: "6 x 3=", answer: "18"},
                { problem: "4 x 4 =", answer: "8"},
                { problem: "1 x 2 =", answer: "3"},
                { problem: "3 x 1 =", answer: "4"},
                { problem: "7 x 3 =", answer: "10"},
                { problem: "6 x 3 =", answer: "9"},
                { problem: "2 x 4 =", answer: "6"},
                
              ]}
              answerset2 = {[
                { problem: "-=", answer: "5"},
                { problem: "x=", answer: "7"},
                { problem: "x=", answer: "8"},
                { problem: "x =", answer: "3"},
                { problem: "x =", answer: "4"},
                { problem: "x =", answer: "10"},
                { problem: "x =", answer: "9"},
                { problem: "x=", answer: "6"},
                
              ]}
              
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-playm'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-fireworksd" render={(props) => (
              <FireworksGame
              answerset = {[
                { problem: "3d =", answer: "5"},
                { problem: "6 dx 1 =", answer: "7"},
                { problem: "4 xd 4 =", answer: "8"},
                { problem: "1 xd 2 =", answer: "3"},
                { problem: "3 xd 1 =", answer: "4"},
                { problem: "7 x d3 =", answer: "10"},
                { problem: "6 xd 3 =", answer: "9"},
                { problem: "2 xd 4 =", answer: "6"},
                
              ]}
              answerset2 = {[
                { problem: "-dd=", answer: "5"},
                { problem: "x=dd", answer: "7"},
                { problem: "xdd=", answer: "8"},
                { problem: "xdd =", answer: "3"},
                { problem: "xdd =", answer: "4"},
                { problem: "xdd =", answer: "10"},
                { problem: "xdd =", answer: "9"},
                { problem: "xdd=", answer: "6"},
                
              ]}
              
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-playd'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-slama" render={(props) => (
              <SlamDunk
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
              answerset2 = {[
                { problem: "3 ++ 2 =", answer: "5"},
                { problem: "6 ++ 1 =", answer: "7"},
                { problem: "4 ++ 4 =", answer: "8"},
                { problem: "1 ++ 2 =", answer: "3"},
                { problem: "3 ++1 =", answer: "4"},
                { problem: "7 ++ 3 =", answer: "10"},
                { problem: "6 ++ 3 =", answer: "9"},
                { problem: "2 ++ 4 =", answer: "6"},
                
              ]}
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-play'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-slams" render={(props) => (
              <SlamDunk
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
              answerset2 = {[
                { problem: "3 + ---erv2 =", answer: "5"},
                { problem: "6 re--re+ 1 =", answer: "7"},
                { problem: "4 +r--f 4 =", answer: "8"},
                { problem: "1 + --rfe2 =", answer: "3"},
                { problem: "3 +--rer 1 =", answer: "4"},
                { problem: "7 r--+ 3 =", answer: "10"},
                { problem: "6 +--re 3 =", answer: "9"},
                { problem: "2--- 4 =", answer: "6"},
                
              ]}
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-plays'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-slamm" render={(props) => (
              <SlamDunk
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
              answerset2 = {[
                { problem: "3 + xx---erv2 =", answer: "5"},
                { problem: "6 rexx--re+ 1 =", answer: "7"},
                { problem: "4 +rxx--f 4 =", answer: "8"},
                { problem: "1 + xx--rfe2 =", answer: "3"},
                { problem: "3 +xxxx--rer 1 =", answer: "4"},
                { problem: "7 r--+xx 3 =", answer: "10"},
                { problem: "6 +xxre 3 =", answer: "9"},
                { problem: "2-xx =", answer: "6"},
                
              ]}
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-playm'}
                {...props} />
                )}/>

      </section>
      <section>
      <Route exact path="/arcade-slamd" render={(props) => (
              <SlamDunk
              answerset = {[
                { problem: "3 d 2 =", answer: "5"},
                { problem: "6 d 1 =", answer: "7"},
                { problem: "4 d 4 =", answer: "8"},
                { problem: "1 d 2 =", answer: "3"},
                { problem: "3 d 1 =", answer: "4"},
                { problem: "7 d 3 =", answer: "10"},
                { problem: "6 d 3 =", answer: "9"},
                { problem: "2 d 4 =", answer: "6"},
                
              ]}
              answerset2 = {[
                { problem: "3 +dv2 =", answer: "5"},
                { problem: "6d 1 =", answer: "7"},
                { problem: "4 +d 4 =", answer: "8"},
                { problem: "1 +d =", answer: "3"},
                { problem: "3 d 1 =", answer: "4"},
                { problem: "7 d", answer: "10"},
                { problem: "6d", answer: "9"},
                { problem: "2d", answer: "6"},
                
              ]}
              // nxtlvl={'/v18#a'}
              gButton={'/arcade-playd'}
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
      <Route exact path="/home" render={(props) => (
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
      <Route exact path="/planetsPageATwo" render={(props) => (
              <PlanetsPageATwo
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
      <Route exact path="/planetsPageStwo" render={(props) => (
              <PlanetsPageSTwo
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
      <Route exact path="/planetsPageMTwo" render={(props) => (
              <PlanetsPageMTwo
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
      <Route exact path="/planetsPageDTwo" render={(props) => (
              <PlanetsPageDTwo
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
