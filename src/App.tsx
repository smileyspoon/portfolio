
//react related imports
import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";

//other imports
import { auth, database, getCurrentUser, createUserProfileDocument, signOut } from './firebase';
import _ from 'lodash';

//component imports
import firebase from 'firebase/app';
import './App.css';
import { Navigation } from './components/Navigation/Navbar';
import { Dashboard } from './components/Sections/Dashboard';


const App = () => {

  return (

    <Container>
        <Navigation />
    </Container>
      
      // <Router>
      //   <Navigation />

      //   <Switch>
      //     <Route exact path ="/" component={Dashboard} />

      //   </Switch>

      // </Router>


  );


      
}

export default App;
