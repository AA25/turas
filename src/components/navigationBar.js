import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles/navigationBar.styles';
import TabItem from './tabItem';

class NagivationBar extends React.Component {
  // Define the Type of the props being passed in
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;

    return (
      <View style={styles.container}>
        {routes.map((route, i) => (
          <TabItem navigation={navigation} key={route.routeName} {...route} isActive={index === i}/>
        ))}
      </View>
    );
  }
}

export default NagivationBar