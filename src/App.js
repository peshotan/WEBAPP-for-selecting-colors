import React from 'react';
import SeedColors from './seedColors';
import Pallete from './Pallete';
import {generatePallete} from "./colorHelpers";
import {generateNewPallete} from "./practiceColorHelpers";

import './App.css';

class App extends React.Component{

  render() {

      console.log(generateNewPallete(SeedColors[4]));

      return (
          <div className={"App"}>

              <div>
                  <Pallete {...SeedColors[3]} />
              </div>
          </div>
      )
  }

}

export default App;
