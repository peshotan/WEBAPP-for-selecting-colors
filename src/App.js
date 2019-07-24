import React from 'react';
import SeedColors from './seedColors';
import Pallete from './Pallete'

import './App.css';

class App extends React.Component{

  render() {
      return (
          <div className={"App"}>
              <div>
                  <Pallete {...SeedColors[4]} />
              </div>
          </div>
      )
  }

}

export default App;
