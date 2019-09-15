import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-eva-icons';

class TabItem extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    routeName: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.navigation.navigate(this.props.routeName)
  }

  render() {
    const { routeName, isActive } = this.props;

    const getIcon = (routeName) => {
      switch(routeName) {
      case 'Progress':
        return 'list-outline'
      case 'Home':
        return 'home-outline'
      case 'Favourites':
        return 'heart'
      case 'Map':
        return 'map-outline'
      default:
        return 'loader-outline'
      }
    };

    const iconName = getIcon(routeName);

    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handlePress}
        >
          <Icon name={iconName} style={styles.tabIconStyle} fill={isActive ? '#0F9D58' : 'grey'}/>
          <Text style={isActive ? styles.activeTabIconText : styles.inactiveTabIconText}>
            {routeName}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0F9D58',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabIconStyle: {
    width: 28,
    height: 28
  },
  activeTabIconText: {
    color: '#0F9D58',
    fontSize: 15,
    fontWeight: '500'
  },
  inactiveTabIconText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '400'
  }
});

export default TabItem