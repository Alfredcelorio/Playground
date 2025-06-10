import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BookingScreen({ navigate }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Book a Carwash</Text>
      <Text style={styles.screenText}>Booking functionality coming soon.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  screenTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  screenText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#222',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
