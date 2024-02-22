import GoogleAuth from "./pages/Login";
import ImageSlider from "./pages/imageslider";
import ManualDataAddition from "./pages/leaderboardtable/leaderboard-screen";
import LeaderboardTable from "./pages/leaderboardtable/leaderboard-container";
import Carousel from "./pages/courasal/courasal";
import LandingPageContainer from "./pages/landingpage/landingpage-container";
import CustomButton from "./atoms/button/custombutton";
// import {Route, Switch} from 'react-router-dom'
import LeaderBoardContainer from "./pages/leaderboardtable/leaderboard-container";
import AttemptsScreen from "./pages/attempts/attempts-screen";
import HintPageScreen from "./pages/hintpage/hintpage-screen";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import LogInContainer from "./pages/Login/login-container";
import AvatarContainer from "./pages/avatar/avatar-container";
import CompletionCertificateContainer from "./pages/completioncertificate/completion-certificate-container";
import LaderContainer from "./pages/lader/lader-container";
import Rules from "./pages/rules/rules-screen";
import Perks from "./pages/perks/perks-screen";
import LimitationsScreen from "./pages/limitations/limitations-screen";
// import GameplayScreen from "./pages/newgameplay/game-play-screen";
import SharableCertificateScreen from "./pages/sharablecertificate/sharable-certificate-screen";
import GameplayContainer from "./pages/newgameplay/game-play-container";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPageContainer />} />
          <Route path="/leaderboard" element={<LeaderBoardContainer />} />
          <Route path="/LogInContainer" element={<LogInContainer />} />
          <Route path="/AvatarContainer" element={<AvatarContainer />} />

          <Route path="/attempts" element={<AttemptsScreen />} />
          <Route path="/hint-page" element={<HintPageScreen />} />
          <Route
            path="/completion-certificate"
            element={<CompletionCertificateContainer />}
          />
          <Route path="/ladder" element={<LaderContainer />} />
          <Route path="/LimitationsScreen" element={<LimitationsScreen />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/Perks" element={<Perks />} />
          {/* <Route path="/new-game-play" element={<GameplayScreen />} /> */}
          <Route
            path="/sharable-certificate"
            element={<SharableCertificateScreen />}
          />
          <Route path="/GameplayContainer" element={<GameplayContainer />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
