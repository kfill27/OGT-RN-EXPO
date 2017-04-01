import React from 'react';
import moment from 'moment';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  ListView,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text, Heading, Title } from '@shoutem/ui';

export default class HistoryScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };
  
  constructor(props) {
    super(props);
    this.state = {
      written_things: null,
    }
  }
  
  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    fetch('https://onegoodthing-api.herokuapp.com/written_things')
    .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          written_things: responseData,
        });
      }).catch((error) => {
        console.error(error);
      })
      .done();
  }
  
  render() {
    const writtenThings = this.state.written_things;
    
    if (!writtenThings) {
      return this.renderLoadingView();
    }
    // Loop through all the written things & make a scrollable list
    var written_thing = writtenThings[0];
    return this.renderGoodThing(written_thing);
  }
  
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading good things...
        </Text>
      </View>
    );
  }
  
  renderGoodThing(written_thing) {
    var newDate = moment(Date(written_thing.created_at)).format('MM/DD/YYYY');
    
    return (
      <View style={styles.container}>
        <Title styleName="h-center lg-gutter-top md-gutter-bottom">Your Good Things</Title>
        <View style={styles.contentContainer}>
          <Heading styleName="md-gutter-left">{newDate}</Heading>
          <Text styleName="md-gutter-left">
            {written_thing.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 50,
  },
});
