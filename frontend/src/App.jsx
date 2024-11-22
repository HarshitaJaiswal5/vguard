import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSec from './components/HeroSec';
import AboutSec from './components/AboutSec';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ReadModeModal from './components/ReadModeModal';

function App() {
  const [readMode, setReadMode] = useState(false);
  const enableReadMode = () => {
    setReadMode(true);
  };

  return (
    <>
      <ReadModeModal enableReadMode={enableReadMode} />
      <Navbar />
      <HeroSec readMode={readMode} />
      <AboutSec readMode={readMode} />
      <Contact readMode={readMode} />
      <Footer readMode={readMode} />
    </>
  );
}

export default App;
