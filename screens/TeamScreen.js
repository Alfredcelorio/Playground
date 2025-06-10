import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';

const team = [
  { name: 'Eliezer', role: 'Washer' },
];

export default function TeamScreen({ navigate }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Our Team</Text>
      {team.map((member, idx) => (
        <View key={idx} style={styles.teamMember}>
          <FeatherIcon name="user" color="#bbb" size={16} />
          <Text style={styles.teamMemberName}>{member.name}</Text>
          <Text style={styles.teamMemberRole}>{member.role}</Text>
        </View>
      ))}
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
  teamMember: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  teamMemberName: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
    marginRight: 8,
    fontWeight: '500',
  },
  teamMemberRole: {
    color: '#fff',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#222',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
