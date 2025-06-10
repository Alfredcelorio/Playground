import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const screens = [
  { name: 'Booking', label: 'Book a Carwash' },
  { name: 'Status', label: 'Order Status' },
  { name: 'Team', label: 'Our Team' },
  { name: 'Profile', label: 'Clients' }, // Renamed from 'Profile' to 'Clients'
];

export default function HomeScreen({ navigate }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Welcome to Uplift </Text>
      <Text style={styles.screenText}>
        Hello, these are the screens we need for admin
      </Text>
      <View style={styles.buttonsContainer}>
        {screens.map((s) => (
          <TouchableOpacity
            key={s.name}
            style={styles.button}
            onPress={() => navigate(s.name)}
          >
            <Text style={styles.buttonText}>{s.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#222',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
