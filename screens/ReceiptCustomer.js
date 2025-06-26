import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReceiptCustomer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receipt Service Details (Customer Side)</Text>
      <Text style={styles.text}>This is the customer-facing receipt/service details screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#222',
  },
  text: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});
