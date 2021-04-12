
//react related imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//other imports
// import { auth, database, getCurrentUser, createUserProfileDocument, signOut } from './firebase';
import _ from 'lodash';

//component imports
// import firebase from 'firebase/app';
import './App.css';
import { Navigation } from './components/Navigation/Navbar';
import { Home } from './components/Main/Home';
import { Pomodoro } from './components/Pomodoro/Pomodoro';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { NoMatch } from './components/NoMatch/NoMatch';
import { Layout } from './layouts/Layout';
import { Jumbotron } from './components/Jumbotron/Jumbotron';




const App = (props: any) => {
  
  return (

    //Fragment is used here so I can have multiple components and App still work
    //If Navigation and Router was not wrapped in React.Fragment, the app would give an error
    <React.Fragment>
      <Navigation />
      
      {/* Not using jumbotron for now */}
      <Jumbotron/>

      {/* Layout is the wrapper around the major part of the App */}
      <Layout>
        <Router>
          <Switch>
            <Route exact path ="/" component={Home} />
            <Route 
              exact path ="/pomodoro" 
              render={() => 
                (
                  <Pomodoro
                  //will need to update user in to an actual thing later
                  //sending true for now so the page will actually load
                      user={true}
                  />
                )}
            />

            <Route exact path = "/about" component={About}/>
            <Route exact path = "/contact" component={Contact} />

            {/* will match nothing and go to here */}
            <Route component = {NoMatch} />
            
          </Switch>
          
        </Router>
      </Layout>
    </React.Fragment>


  );


      
}

export default App;
