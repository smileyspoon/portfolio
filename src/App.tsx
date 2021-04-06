import React from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import  { Row, Container, Col, Button, Image, Card, CardDeck,Form, FormControl,  } from 'react-bootstrap';


import logo from './logo.svg';
import './App.css';
import { auth, database, getCurrentUser, createUserProfileDocument, signOut } from './firebase';

const App = () => {

  return  (

      <div>Start</div>
    
          );
      
}

export default App;

