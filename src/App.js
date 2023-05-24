import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./Components/Layout/Topbar/Topbar";
import HomePage from "./Components/Pages/HomePage/HomePage";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import PopularPage from "./Components/Pages/PopularPage/PopularPage";
/* import PoliticsPage from './Components/Pages/PoliticsPage/PoliticsPage' */

import NotifyPage from "./Components/Pages/NotifyPage/NotifyPage";
import SettingPage from "./Components/Pages/SettingPage/SettingPage";
import DraftPage from "./Components/Pages/DraftPage/DraftPage";
import CollectPage from "./Components/Pages/CollectPage/CollectPage";
import NewsPageMain from "./Components/Pages/NewsPage/NewsPageMain";
import MyStoriesPage from "./Components/Pages/MyStoriesPage/MyStoriesPage";

import AuthService from "./services/auth.service";

const App = () => {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  return (
    <Router>
      <Topbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route path="/popular" element={<PopularPage />} />
        {/* SideBar */}
        <Route path="/notify" element={<NotifyPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route
          path="/stories/draft"
          element={<DraftPage currentUser={currentUser} />}
        />
        <Route
          path="/stories/my-stories"
          element={<MyStoriesPage currentUser={currentUser} />}
        />
        <Route path="/collect" element={<CollectPage />} />
        <Route path="/news/:id" element={<NewsPageMain />} />
      </Routes>
    </Router>
  );
};

export default App;
