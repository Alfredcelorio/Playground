import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import StatusScreen from './screens/StatusScreen';
import TeamScreen from './screens/TeamScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function Example() {
  const [screen, setScreen] = useState('Home');

  function renderScreen() {
    switch (screen) {
      case 'Home':
        return <HomeScreen navigate={setScreen} />;
      case 'Booking':
        return <BookingScreen navigate={setScreen} />;
      case 'Status':
        return <StatusScreen navigate={setScreen} />;
      case 'Team':
        return <TeamScreen navigate={setScreen} />;
      case 'Profile':
        return <ProfileScreen navigate={setScreen} />;
      default:
        return <HomeScreen navigate={setScreen} />;
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={styles.header} />
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /** Header */
  header: {
    height: 0,
  },
});
