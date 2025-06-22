import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import { mainStyles } from '../styles/MainStyles';

const team = [
  { name: 'Eliezer', role: 'Washer' },
];

export default function TeamScreen({ navigate }) {
  return (
    <View style={mainStyles.screenContainer}>
      <View style={mainStyles.titleRow}>
        <Text style={mainStyles.mainTitle}>Our Team</Text>
      </View>
      {team.map((member, idx) => (
        <View key={idx} style={styles.teamMember}>
          <FeatherIcon name="user" color="#bbb" size={16} />
          <Text style={styles.teamMemberName}>{member.name}</Text>
          <Text style={styles.teamMemberRole}>{member.role}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
