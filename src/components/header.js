import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles/header.styles';

class Header extends React.Component {
  // Define the Type of the props being passed in
  static propTypes = {
    hideHeader: PropTypes.bool
  }

  static defaultProps = {
    hideHeader: false
  }

  constructor(props) {
    // Super calls the parent class constructor and you cannot use 'this' in a constructor
    // until it the parent has been called
    // React automatically attaches props to the instance so you don't have to pass it into super
    // however passing props in will avoid the case where 'this.props' is undefined as React only
    // attaches the prop to the instance after the constructor has run
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
            Header
        </Text>
      </View>
    );
  }
}

export default Header