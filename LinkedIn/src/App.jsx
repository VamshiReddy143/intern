import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leftsidebar from './sections/Leftsidebar';
import Rightsidebar from './sections/Rightsidebar';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Network from './components/Network';
// import Home from './sections/Home';

// import Jobs from './sections/Jobs';
// import Messaging from './sections/Messaging';
// import Notifications from './sections/Notifications';

const App = () => {
  return (
    <Router>
      <div className='lg:p-3'>
        <Navbar />
        <div className='lg:mt-5 '>
          <Routes>
            <Route path="/" element={<div className='md:flex lg:gap-10 md:gap-2'><Leftsidebar /><Rightsidebar /></div>} />
            <Route path="/network" element={<Network/>} />
            {/* <Route path="/jobs" element={<Jobs />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/notifications" element={<Notifications />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;