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
import CoinDetail from './shared/CoinDetail';

// Context 
import DataContextProvider from './contexts/DataContextProvider';
import WatchListContextProvider from './contexts/WatchListContextProvider';

// Style
import './styles/scss/app.scss'

const App = () => {
  return (
    <div className='total'>
      <div>
        <Navbar />
        <DataContextProvider>
          <WatchListContextProvider>
            <Routes>
              <Route path='/About-Project' element={<AboutProject />} />
              <Route path='/Developer' element={<Developer />} />
              <Route path='/Spot-Market' element={<SpotMarket />} />
              <Route path='/WatchList' element={<WatchList />} />
              <Route path='/' element={<Navigate to='/Spot-Market' />} />
              <Route path='/Coin/:id' element={<CoinDetail />} />
            </Routes>
          </WatchListContextProvider>
        </DataContextProvider>
      </div>
    </div>

  );
};

export default App;

{/* <Routes>
        <Route path='/About-Project' element={<AboutProject />} />
        <Route path='/Developer' element={<Developer />} />
        <Route path='/Spot-Market' element={
          <DataContextProvider>
            <SpotMarket />
          </DataContextProvider>} />
        <Route path='/WatchList' element={<WatchList />} />
        <Route path='/' element={<Navigate to='/Spot-Market' />} />
      </Routes> */}