import React from 'react';
import { View, TextInput } from '@shoutem/ui';

import firebaseRef from '../utilities/firebaseConfig';


export default class LoginScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      status: '',
    }
    this.login = this.login.bind(this)
  }
  
  login(){
    firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  
  
  render(){
    
    return(
      <View>
        <TextInput 
          keyboardType={'email-address'}
          placeholder="Email Address"
          keyboardAppearance="light"
          />
        <TextInput 
          keyboardType={'default'}
          placeholder="Password"
          secureTextEntry={true}
          keyboardAppearance="light"
          />
      </View>
    )
  }
}