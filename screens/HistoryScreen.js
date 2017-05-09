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
import Thing from '../components/Thing';

export default class HistoryScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };
  
  constructor(props) {
    super(props);
    this.state = {
      things: null,
    }
    this.renderGoodThings = this.renderGoodThings.bind(this);
  }
  
  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    fetch('https://onegoodthing-api.herokuapp.com/things')
    .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          things: responseData,
        });
      }).catch((error) => {
        console.error(error);
      })
      .done();
  }
  
  render() {
    const { things } = this.state;
    if (!things) {
      return this.renderLoadingView();
    }
    // Loop through all the written things & make a scrollable list
    return this.renderGoodThings(things);
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
  
  renderGoodThings(things) {
    const prettyThings = things.map(function(datum, key) {
      let newDate = moment(Date(datum.created_at)).format('MM/DD/YYYY');
      return (
        <View style={styles.contentContainer}>
          <Heading styleName="md-gutter-left">{newDate}</Heading>
          <Text key={key} styleName="md-gutter-left">
            {datum.description}
          </Text>
        </View>
      )
    });
    
    return (
      <View style={styles.container}>
        <Title styleName="h-center lg-gutter-top md-gutter-bottom">Your Good Things</Title>
          {prettyThings}
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
