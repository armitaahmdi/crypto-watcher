import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import AboutProject from './pages/AboutProject'
import Developer from './pages/Developer';
import SpotMarket from './pages/SpotMarket';
import WatchList from './pages/WatchList';

// Context 
import DataContextProvider from './contexts/DataContextProvider';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/About-Project' element={<AboutProject />} />
        <Route path='/Developer' element={<Developer />} />
        <Route path='/Spot-Market' element={
          <DataContextProvider>
            <SpotMarket />
          </DataContextProvider>} />
        <Route path='/WatchList' element={<WatchList />} />
        <Route path='/' element={<Navigate to='/Spot-Market' />} />
      </Routes>



      {/* <DataContextProvider>
          <Routes>
            <Route path='/About-Project' element={<AboutProject />} />
            <Route path='/Developer' element={<Developer />} />
            <Route path='/Spot-Market' element={<SpotMarket />} />
            <Route path='/WatchList' element={<WatchList />} />
            <Route path='/' element={<Navigate to='/Spot-Market' />} />
          </Routes>
      </DataContextProvider> */}
    </div>
  );
};

export default App;
