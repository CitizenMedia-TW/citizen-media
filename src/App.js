import React from "react";
import { HashRouter as Router, Routes, Route, useParams  } from 'react-router-dom'

import Topbar from './Components/Layout/Topbar/Topbar'
import HomePage from './Components/Pages/HomePage/HomePage'
import LoginPage from './Components/Pages/LoginPage/LoginPage'
import PoliticsPage from './Components/Pages/PoliticsPage/PoliticsPage'

import NotifyPage from "./Components/Pages/NotifyPage/NotifyPage";
import SettingPage from "./Components/Pages/SettingPage/SettingPage";
import DraftPage from "./Components/Pages/DraftPage/DraftPage";
import CollectPage from "./Components/Pages/CollectPage/CollectPage";
import PopularPage from "./Components/Pages/PopularPage/PopularPage";
import NewsPage from "./Components/Pages/NewsPage/NewsPage";

const App = () => {
  return (
    <Router>
        <Topbar />
        <Routes>
            <Route exact path="/" element={ <HomePage /> } />
            <Route exact path="/login" element={ <LoginPage /> } />
            <Route exact path="/politics" element={ <PopularPage /> } />
            <Route exact path="/notify" element={ <NotifyPage /> } />
            <Route exact path="/setting" element={ <SettingPage /> } />
            <Route exact path="/draft" element={ <DraftPage /> } />
            <Route exact path="/collect" element={ <CollectPage /> } />
            <Route exact path="/news/:id" element={<NewsPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
