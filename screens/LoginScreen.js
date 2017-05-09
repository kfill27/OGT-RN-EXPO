import React from 'react';
import { View, TextInput } from '@shoutem/ui';

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