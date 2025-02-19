import React from 'react';
import './App.css';
import Header from './Header/Header';
import SongSlider from './SongSlider/SongSlider';
import SongChart from './SongChart/SongChart';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import Playlist from './Playlist/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Songs from './Routes/Songs/song';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      {/* <SongSlider />
      <SongChart /> */}
        <Routes>
        <Route path="/" element={<Body />} > </Route> 
        <Route path="/songs" element={<Songs />} > </Route> 
        </Routes>

      </Router>
      <Footer />

    </div>
  );
}

export default App;
