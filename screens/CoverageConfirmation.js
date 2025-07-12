import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function CoverageConfirmation({ route }) {
  const { covered, zipcode } = route.params || {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>
          {covered
            ? `Yes! We cover ${zipcode}`
            : `Sorry, we don't cover ${zipcode} yet.`}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  box: {
    backgroundColor: '#f0f6fb',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
  },
});
