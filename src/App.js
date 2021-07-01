import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Heading} from './components/Heading'
import {Prefs} from './components/Prefs/Prefs'
import {PhotoGallery} from './components/PhotoGallery'
import {Location} from './components/Location'
import {Infosky} from './components/Infosky'

//Od Manina K Dunaju

function App() {
  return (
    <div className="App custom-font">
      <Heading />
      <svg preserveAspectRatio="none" height="60px" width="100%" style={{backgroundColor: '#c19a94'}} xmlns="http://www.w3.org/2000/svg" viewBox="180 -70 1100 370"><path fill="#e0c8a0" fill-opacity="1" d="M0,288L60,277.3C120,267,240,245,360,213.3C480,181,600,139,720,112C840,85,960,75,1080,85.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <Prefs />
      <svg preserveAspectRatio="none" height="60px" width="100%" style={{backgroundColor: '#e0c8a0'}} xmlns="http://www.w3.org/2000/svg" viewBox="180 -70 1100 370"><path fill="#6a766a" fill-opacity="1" d="M0,288L60,277.3C120,267,240,245,360,213.3C480,181,600,139,720,112C840,85,960,75,1080,85.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <PhotoGallery />
      <svg preserveAspectRatio="none" height="60px" width="100%" style={{backgroundColor: '#6a766a'}} xmlns="http://www.w3.org/2000/svg" viewBox="180 -70 1100 370"><path fill="#c19a94" fill-opacity="1" d="M0,288L60,277.3C120,267,240,245,360,213.3C480,181,600,139,720,112C840,85,960,75,1080,85.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <Location />
      <svg preserveAspectRatio="none" height="60px" width="100%" style={{backgroundColor: '#c19a94'}} xmlns="http://www.w3.org/2000/svg" viewBox="180 -70 1100 370"><path fill="#e0c8a0" fill-opacity="1" d="M0,288L60,277.3C120,267,240,245,360,213.3C480,181,600,139,720,112C840,85,960,75,1080,85.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <Infosky />
    </div>
  );
}

export default App;
