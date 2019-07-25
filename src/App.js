import React from 'react';
import SeedColors from './seedColors';
import Pallete from './Pallete';
import {generatePallete} from "./colorHelpers";
import {generateNewPallete} from "./practiceColorHelpers";

import './App.css';

class App extends React.Component{

  render() {

      // we are using the generateNewPallete function to generate a newPalletes with all the shades from
      // 50 level to 900;
      // level 50 will be ignored

      console.log(generateNewPallete(SeedColors[4]));

      return (
          <div className={"App"}>

              <div>
                  <Pallete pallete={generateNewPallete(SeedColors[4])} />
              </div>
          </div>
      )
  }

}

export default App;
