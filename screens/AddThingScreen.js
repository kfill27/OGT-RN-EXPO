import React from 'react';
import { Button, Screen, Text, TextInput, View } from '@shoutem/ui';
import firebase from 'firebase';

export default class AddThingScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Add One Good Thing Today',
    },
  };
  
  constructor(){
    super();
    this.state = {
      text: 'I am text'
    }
  }
  
  render() {
    const doSomething = () => {
      fetch('https://onegoodthing-api.herokuapp.com/written_things', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: 'yourValue',
        })
      })
    }
    
    return (
      <Screen>
        <View styleName="vertical md-gutter">
          <TextInput
            styleName="md-gutter-bottom"
            placeholder={'Add your thing here...'}
            onChangeText={(text) => this.setState({text: text})}
          />
          <Button 
            styleName="dark"
            onPress={doSomething}
          >
            <Text>ADD THIS GOOD THING</Text>
          </Button>
        </View>
      </Screen>
    );
  }
}