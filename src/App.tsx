
//react related imports
import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';


//other imports
import { auth, database, getCurrentUser, createUserProfileDocument, signOut } from './firebase';
import _ from 'lodash';

//component imports
import firebase from 'firebase/app';
import './App.css';
import { Navigation } from './components/Navigation/Navbar';
import { Home } from './components/Main/Home';
import { Pomodoro } from './components/Pomodoro/Pomodoro';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { NoMatch } from './components/NoMatch/NoMatch';
import { Layout } from './layouts/Layout';



const App = () => {

  return (

    //Fragment is used here so I can have multiple components and App still work
    //If Navigation and Router was not wrapped in React.Fragment, the app would give an error
    <React.Fragment>
      <Navigation />

      {/* Layout is the wrapper around the major part of the App */}
      <Layout>
        <Router>
          <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/pomodoro" component={Pomodoro} />
            <Route exact path = "/about" component={About}/>
            <Route exact path = "/contact" component={Contact} />

            {/* will match nothing and go to here */}
            <Route component = {NoMatch} />
            
          </Switch>
          
        </Router>
      </Layout>
    </React.Fragment>



    // <Container>
    //     <Navigation />
    // </Container>
      
      // <Router>
      //   <Navigation />

      //   <Switch>
      //     <Route exact path ="/" component={Dashboard} />

      //   </Switch>

      // </Router>


  );


      
}

export default App;
