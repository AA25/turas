import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../header';
import AppStatusBar from '../statusBar';
class ProgressScreen extends React.Component {
  static navigationOptions = {
    // Overriding react navigation header with custom header
    // header: <Header />
  };

  render() {
    return (
      <View style={screenStyles.container}>
        <AppStatusBar/>
        <Header/>
        <View style={screenStyles.body}>
          <Text style={screenStyles.textStyle}>User Progress</Text>
        </View>
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e8e50' // This colour affects the iOS statusbar colour
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textStyle: {
    color: 'black',
    fontSize: 30
  }
})

export default ProgressScreen