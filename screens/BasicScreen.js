import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Look at you, trying to make a mobile app. Here's a basic screen to flex on your friends.
const BasicScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Snarky App</Text>
      <Text style={styles.subtitle}>What, you thought I'd make it fancy? Pfft.</Text>
      <Button
        title="Press Me, Loser"
        onPress={() => alert('Wow, you actually pressed it. Bold move.')}
        color="#ff4d4d" // Red button for that extra sass
      />
    </View>
  );
};

// Some basic styles to make it less ugly
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Boring gray, because you didn't specify
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default BasicScreen;
