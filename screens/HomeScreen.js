import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { mainStyles } from '../styles/MainStyles';
import ReceiptCustomer from './ReceiptCustomer';

const screens = [
  { name: 'Booking', label: 'Book a Carwash' },
  { name: 'Status', label: 'Order Status' },
  { name: 'Team', label: 'Service details worker' },
  { name: 'Profile', label: 'Clients' },
  { name: 'Empty', label: 'Service Details Guest' },
  { name: 'ReceiptCustomer', label: 'Receipt Service Details Customer Side' },
  { name: 'Coverage', label: 'Check if we cover your area' }, // Added new screen
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <View style={mainStyles.titleRow}>
        <Text style={mainStyles.mainTitle}>
          Welcome to Uplift
        </Text>
      </View>
      <Text style={styles.screenText}>
        Hello, these are the screens we need for admin
      </Text>
      <View style={styles.buttonsContainer}>
        {screens.map((s) => (
          <TouchableOpacity
            key={s.name}
            style={styles.button}
            onPress={() => navigation.navigate(s.name)}
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
    justifyContent: 'flex-start', // Changed to position content at the top
    padding: 24,
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

// In your navigator (e.g., App.js):
// <Stack.Screen name="ReceiptCustomer" component={ReceiptCustomer} />
