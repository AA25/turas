import React from 'react';
import { View, Dimensions, Text, Platform} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { styles, mapStyles } from './styles/googleMap.styles';
import { getSheffield } from '../services/api/nearbySearch';

const { width, height } = Dimensions.get('window');
const aspectRatio = width / height;
const latitudeDelta = 0.0922;

class GoogleMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {},
      showMap: null,
      searchRadius: 200,
      type: 'bar'
    }
  }

  setShowMapState = (changeTo) => {
    this.setState({showMap: changeTo})
  }

  setStatesForValidLocationPermission = (userLatitude, userLongitude) => {
    this.setState({
      region: {
        latitude: userLatitude,
        longitude: userLongitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: latitudeDelta * aspectRatio
      },
      showMap: true
    })
  }

  componentDidMount() {
    // Setting up of initial state
    this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    if(Platform.OS === 'android'){
      try {
        // Check if we have location permission, and if not show prompt
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
            'To show local pubs in your area, this app will require location permission',
            buttonPositive: 'OK'
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.getUserLocation();
        } else {
          // If permission is denied then set map state to false to show different error component
          this.setShowMapState(false);
        }
      } catch (err) {
        // Some error with getting location permission, set the showMap to false
        // Should send this error to the logger
        this.setShowMapState(false);
      }
    } else if(Platform.OS === 'ios') {
      this.getUserLocation();
    }
  }

  getPlacesUrlWithParameters = (latitude, longitude) => {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const location = `location=${latitude},${longitude}&radius=${this.state.searchRadius}`;
    const typeData = `&types=${this.state.type}`
    const key = `&key=<INSERT-KEY>`; // Having the key here is BAD! Future TODO!
    return `${url}${location}${typeData}${key}`;
  }

  getNearbyPointsOfInterest = async (userLatitude, userLongitude) => {
    const nearbySearchApiEndpoint = this.getPlacesUrlWithParameters(userLatitude, userLongitude);
    try {
      // let response = await fetch('https://facebook.github.io/react-native/movies.json');
      // let response = await fetch(nearbySearchApi);
      // let responseJson = await response.json();

      // Don't make the request unless you have to...
      let response = getSheffield();
      // Update the state for region and show map which will cause a re-render
      this.setStatesForValidLocationPermission(userLatitude, userLongitude);
    } catch (error) {
      // console.log(error);
      this.setShowMapState(false);
    }
  }

  getUserLocation = () => {
    // At this point we have location permission on the device
    Geolocation.getCurrentPosition(
      (position) => {
        // Make request for nearby points of interest
        this.getNearbyPointsOfInterest(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        // See error code charts below
        console.warn(error.code, error.message);
        this.setShowMapState(false);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {(this.state.showMap === null) &&
            <View style={styles.loaderContainer}>
              <Icon name='loader-outline' style={styles.iconStyle} fill='black'/>
            </View>
        }
        {(this.state.showMap) &&
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            // customMapStyle={mapStyles}
            region={this.state.region}
            showsUserLocation={true}
            showsMyLocationButton={true}
          />
        }
        {(this.state.showMap === false) &&
          <View style={styles.textStyle}>
            <Text>
                Oops...
            </Text>
            <Text>
                Sadly we cannot show the map at the moment.
            </Text>
          </View>
        }
      </View>
    )
  }
}

export default GoogleMap