import React from 'react';
import { StyleSheet, View } from 'react-native';
import GoogleMaps from '../googleMap';
import AppStatusBar from '../statusBar';

class MapScreen extends React.Component {
  static navigationOptions = {
    // Overriding react navigation header with null
    // header: null
    // header: <Header hideStatusBar={true}></Header>
  };

  render() {
    return (
      <View style={screenStyles.container}>
        <AppStatusBar/>
        <GoogleMaps></GoogleMaps>
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e8e50' // This colour affects the iOS statusbar colour
  }
})

export default MapScreen