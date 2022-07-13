import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutProject from './pages/AboutProject'
import Developer from './pages/Developer';
import SpotMarket from './pages/SpotMarket';
import WatchList from './pages/WatchList';

const App = () => {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path='/About-Project' element = { <AboutProject /> } />
        <Route path = '/Developer'element = { <Developer /> } />
        <Route path='/Spot-Market' element = { <SpotMarket /> } />
        <Route path='/WatchList' element = { <WatchList /> }  />
      </Routes>
    </div>
  );
};

export default App;
