import React from 'react';
import SeedColors from './seedColors';
import Pallete from './Pallete';
import {Route, Switch} from 'react-router-dom';
import {generateNewPallete} from "./practiceColorHelpers";
import PalleteList from './PalleteList';
import SinglePallete from './SinglePallete';

import './App.css';

class App extends React.Component{


   // APP.JS is the parent component of Pallete.JS and PalleteList.JS
    // the following function returns a ENHANCED Pallete Component(with all levels) with all the necessary props passed in

   correctGeneratedPallete = (id) => {
       try {
           console.log(id);
           // this is without the levels
           let correctOriginalPallete = SeedColors.find((pallete) => pallete.id === id);

           console.log("generated Pallete with all levels",generateNewPallete(correctOriginalPallete));

           // this is with the levels
           return <Pallete pallete={generateNewPallete(correctOriginalPallete)} />;
       } catch (e) {
           console.log(e);
           return <h1>ERROR!</h1>
       }

   };


   generatePalleteForSinglePallete = (palleteId, renderProps) => {

       try {
           console.log(palleteId);
           // this is without the levels
           let correctOriginalPallete = SeedColors.find((pallete) => pallete.id === palleteId);


           // this is with the levels
           return <SinglePallete pallete={generateNewPallete(correctOriginalPallete)} {...renderProps}/>;
       } catch (e) {
           console.log(e);
           return <h1>ERROR!</h1>
       }

   }



  render() {

      // we are using the generateNewPallete function to generate a newPalletes with all the shades from
      // 50 level to 900;
      // level 50 will be ignored

      console.log("generated Pallete with all levels" , generateNewPallete(SeedColors[4]));

      return (
          <div className={"App"}>
              <Switch>
                  {/* For the HomePage Route we are passing the each individual pallete fromt he SeedColors */}
                  <Route exact path={'/'} render={(renderProps)=> <PalleteList {...renderProps} palletes={SeedColors} />}/>
                  <Route exact path={'/pallete/:id'} render={
                      (renderProps)=> this.correctGeneratedPallete(renderProps.match.params.id)}/>
                  <Route exact
                         path={'/pallete/:palleteId/:colorId'}
                         render={
                             (renderProps)=>
                                 this.generatePalleteForSinglePallete(renderProps.match.params.palleteId, renderProps)
                         }
                  />
                  <Route render={()=> <h1>ERROR!</h1>}/>
              </Switch>
          </div>
      )
  }

}

export default App;
