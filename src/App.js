import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Topbar from './Components/Topbar/Topbar'
import HomePage from './Components/Pages/HomePage/HomePage'
import LoginPage from './Components/Pages/LoginPage/LoginPage'
import PoliticsPage from './Components/Pages/PoliticsPage/PoliticsPage'

const App = () => {
  return (
    <Router>
        <Topbar />
        <Routes>
            <Route exact path="/" element={ <HomePage /> } />
            <Route exact path="/login" element={ <LoginPage /> } />
            <Route exact path="/politics" element={ <PoliticsPage /> } />
        </Routes>
    </Router>
  );
}

export default App;
