import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import StatusScreen from './screens/StatusScreen';
import TeamScreen from './screens/TeamScreen';
import ProfileScreen from './screens/ProfileScreen';
import EmptyScreen from './screens/EmptyScreen'; // Import the EmptyScreen
import CustomerDescription from './screens/CustomerDescription';
import ReviewConfirmation from './screens/ReviewConfirmation';

const Stack = createStackNavigator();

export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      {/* <Header style={styles.header} /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
          <Stack.Screen name="Status" component={StatusScreen} />
          <Stack.Screen name="Team" component={TeamScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Empty" component={EmptyScreen} />
          <Stack.Screen name="CustomerDescription" component={CustomerDescription} />
          <Stack.Screen name="ReviewConfirmation" component={ReviewConfirmation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /** Header */
  header: {
    height: 0,
  },
});
