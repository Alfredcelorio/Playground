import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { mainStyles } from '../styles/MainStyles';

export default function BookingScreen({ navigate }) {
  return (
    <View style={mainStyles.screenContainer}>
      <View style={mainStyles.titleRow}>
        <Text style={mainStyles.mainTitle}>Book a Carwash</Text>
      </View>
      <Text style={mainStyles.screenText}>Booking  coming soon.</Text>
      <TouchableOpacity style={mainStyles.button} onPress={() => navigate('Home')}>
        <Text style={mainStyles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
