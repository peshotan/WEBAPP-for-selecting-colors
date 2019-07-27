import React from 'react';
import SeedColors from './seedColors';
import Pallete from './Pallete';
import {Route, Switch} from 'react-router-dom';
import {generateNewPallete} from "./practiceColorHelpers";
import PalleteList from './PalleteList'

import './App.css';

class App extends React.Component{

   correctGeneratedPallete = (id) => {
       try {
           console.log(id);
           let correctOriginalPallete = SeedColors.find((pallete) => pallete.id === id);
           return <Pallete pallete={generateNewPallete(correctOriginalPallete)} />;
       } catch (e) {
           console.log(e);
           return <h1>ERROR!</h1>
       }

   };


  render() {

      // we are using the generateNewPallete function to generate a newPalletes with all the shades from
      // 50 level to 900;
      // level 50 will be ignored

      console.log(generateNewPallete(SeedColors[4]));

      return (
          <div className={"App"}>



              <Switch>
                  <Route exact path={'/'} render={()=> <PalleteList palletes={SeedColors} />}/>
                  <Route exact path={'/pallete/:id'} render={
                      (renderProps)=> this.correctGeneratedPallete(renderProps.match.params.id)}/>
                  <Route render={()=> <h1>ERROR!</h1>}/>
              </Switch>
          </div>
      )
  }

}

export default App;
