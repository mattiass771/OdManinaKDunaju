import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Heading} from './components/Heading'
import {Prefs} from './components/Prefs/Prefs'

function App() {
  return (
    <div className="App custom-font">
      <Heading />
      <Prefs />
    </div>
  );
}

export default App;
