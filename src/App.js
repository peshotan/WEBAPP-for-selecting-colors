import React from 'react';
import SeedColors from './seedColors';
import Pallete from './Pallete';
import {Route, Switch} from 'react-router-dom';
import {generateNewPallete} from "./practiceColorHelpers";
import PalleteList from './PalleteList';
import SinglePallete from './SinglePallete';
import NewPalleteForm from './NewPalleteForm';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from './Page';
import './Page.css';

import './App.css';

class App extends React.Component{

    constructor(props) {
        super(props);
        const savedPalletes = JSON.parse(window.localStorage.getItem("palletes"));
        this.state = {
            palletes : savedPalletes || SeedColors
        }
    }


   // APP.JS is the parent component of Pallete.JS and PalleteList.JS
    // the following function returns a ENHANCED Pallete Component(with all levels) with all the necessary props passed in

   correctGeneratedPallete = (id) => {
       try {
           console.log(id);
           // this is without the levels
           let correctOriginalPallete = this.state.palletes.find((pallete) => pallete.id === id);

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
           let correctOriginalPallete = this.state.palletes.find((pallete) => pallete.id === palleteId);


           // this is with the levels
           return <SinglePallete pallete={generateNewPallete(correctOriginalPallete)} {...renderProps}/>;
       } catch (e) {
           console.log(e);
           return <h1>ERROR!</h1>
       }

   };

   saveNewPallete = (newPallete) => {
       this.setState(
           {palletes : [...this.state.palletes, newPallete]},
           this.syncLocalStorage
       )
   };

   syncLocalStorage = () => {
       window.localStorage.setItem(
           "palletes",
           JSON.stringify(this.state.palletes))
   };

   deletePallete = (palleteId) => {
        this.setState(
            {palletes : this.state.palletes.filter(eachPallete => eachPallete.id !== palleteId) },
            this.syncLocalStorage
            )
   };

  render() {

      // we are using the generateNewPallete function to generate a newPalletes with all the shades from
      // 50 level to 900;
      // level 50 will be ignored

      console.log("generated Pallete with all levels" , generateNewPallete(SeedColors[4]));

      return (
          <div className={"App"}>
              <Route render={({location}) =>
                  <TransitionGroup>
                      <CSSTransition key={location.key} classNames={'fade'} timeout={500}>
                          <Switch location={location}>
                          {/* For the HomePage Route we are passing the each individual pallete fromt he SeedColors */}
                          <Route
                              exact
                              path={'/pallete/new'}
                              render={
                                  (renderProps) =>
                                      <Page>
                                          <NewPalleteForm
                                              {...renderProps}
                                              palletes={this.state.palletes}
                                              savePallete={this.saveNewPallete}
                                          />
                                      </Page>
                              }
                          />
                          <Route
                              exact
                              path={'/'}
                              render={
                                  (renderProps)=>
                                      <Page>
                                          <PalleteList
                                              {...renderProps}
                                              deletePallete={this.deletePallete}
                                              palletes={this.state.palletes}
                                          />
                                      </Page>
                              }
                          />
                          <Route
                              exact
                              path={'/pallete/:id'}
                              render={
                                  (renderProps)=>
                                      <Page>
                                          {this.correctGeneratedPallete(renderProps.match.params.id)}
                                      </Page>
                              }
                          />
                          <Route exact
                                 path={'/pallete/:palleteId/:colorId'}
                                 render={
                                     (renderProps)=>
                                         <Page>
                                             {this.generatePalleteForSinglePallete(renderProps.match.params.palleteId, renderProps)}
                                         </Page>
                                             }
                          />
                          <Route render={()=> <h1>ERROR!</h1>}/>
                      </Switch>
                  </CSSTransition>
              </TransitionGroup>


              } />

          </div>
      )
  }

}

export default App;
