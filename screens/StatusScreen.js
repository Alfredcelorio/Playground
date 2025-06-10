import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const steps = [
  {
    title: 'Booking Confirmed',
    time: '2:32 PM',
    description: 'Your carwash booking is confirmed',
    icon: 'check-underline',
  },
  {
    title: 'Vehicle Inspection',
    time: '2:35 PM',
    description: 'Staff is inspecting your vehicle',
    icon: 'car-search-outline',
  },
  {
    title: 'Washing',
    time: '2:45 PM',
    description: 'Your car is being washed',
    icon: 'car-wash',
  },
  {
    title: 'Detailing',
    time: '2:50 PM',
    description: 'Detailing and finishing touches in progress',
    icon: 'car-cog',
  },
  {
    title: 'Ready to drive',
    time: '3:00 PM',
    description: 'Your car is ready to take it out of the garage',
    icon: 'car-check',
  },
];

const team = [
  { name: 'Eliezer', role: 'Washer' },
];

export default function StatusScreen({ navigate }) {
  const [form] = useState({
    currentStep: 3,
  });

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      style={{ backgroundColor: '#111' }}>
      <View style={styles.section}>
        <View style={styles.carwashHeader}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.carwashInfo}>
            <Image
              alt=""
              source={{
                uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
              }}
              style={styles.carwashImg}
            />
            <View style={styles.carwashDetails}>
              <Text style={styles.carwashName}>Uplift Carwash</Text>
              <Text style={styles.carwashOrder}>Order #CW2024</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.carwashBadge}>
            <FeatherIcon color="#22c55e" name="clock" size={17} />
            <Text style={styles.carwashStatus}>45 min</Text>
          </View>
        </View>
        <View style={styles.teamSection}>
          <Text style={styles.teamTitle}>Servicing Team</Text>
          {team.map((member, idx) => (
            <View key={idx} style={styles.teamMember}>
              <FeatherIcon name="user" color="#bbb" size={16} />
              <Text style={styles.teamMemberName}>{member.name}</Text>
              <Text style={styles.teamMemberRole}>{member.role}</Text>
            </View>
          ))}
        </View>
        <View style={styles.sectionDivider} />
        <View style={styles.sectionTimeline}>
          {steps.map((step, index) => (
            <View key={index} style={styles.sectionTimelineItem}>
              <View style={styles.sectionTimelineMarker}>
                <View
                  style={[
                    styles.sectionMarker,
                    {
                      backgroundColor:
                        index < form.currentStep
                          ? '#222'
                          : index === form.currentStep
                          ? '#111'
                          : '#000',
                      borderColor:
                        index <= form.currentStep ? '#22c55e' : '#333',
                      borderStyle:
                        index === form.currentStep ? 'dashed' : 'solid',
                    },
                  ]}>
                  <MaterialCommunityIcons
                    color={index <= form.currentStep ? '#22c55e' : '#bbb'}
                    name={step.icon}
                    size={index === form.currentStep ? 18 : 16}
                    type="matcomm"
                  />
                </View>
                {index < steps.length - 1 && (
                  <View
                    style={[
                      styles.sectionLine,
                      {
                        backgroundColor:
                          index < form.currentStep ? '#22c55e' : '#333',
                      },
                    ]}
                  />
                )}
              </View>
              <View
                style={[
                  styles.sectionTimelineContent,
                  {
                    opacity: index > form.currentStep ? 0.5 : 1,
                  },
                ]}>
                <View style={styles.sectionTimelineHeader}>
                  <Text
                    style={[
                      styles.sectionTimelineTitle,
                      {
                        color:
                          index === form.currentStep ? '#16a34a' : '#fff',
                      },
                    ]}>
                    {step.title}
                  </Text>
                  <Text style={styles.sectionTimelineTime}>{step.time}</Text>
                </View>
                <Text style={styles.sectionTimelineDescription}>
                  {step.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 16,
    backgroundColor: '#111',
  },
  section: {
    backgroundColor: '#111',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#222',
    marginBottom: 12,
  },
  carwashHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  carwashInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  carwashImg: {
    height: 44,
    width: 44,
    borderRadius: 9999,
  },
  carwashDetails: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginLeft: 12,
  },
  carwashName: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  carwashOrder: {
    color: '#fff',
    fontSize: 13,
    marginTop: 2,
  },
  carwashBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  carwashStatus: {
    fontSize: 13,
    fontWeight: '600',
    color: '#22c55e',
    marginLeft: 4,
  },
  teamSection: {
    marginTop: 16,
    marginBottom: 8,
  },
  teamTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 6,
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
  sectionDivider: {
    height: 1,
    backgroundColor: '#222',
    marginVertical: 16,
  },
  sectionTimeline: {
    marginTop: 6,
  },
  sectionTimelineItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  sectionTimelineMarker: {
    width: 32,
    alignItems: 'center',
  },
  sectionMarker: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionLine: {
    width: 2,
    height: 40,
    marginVertical: 4,
  },
  sectionTimelineContent: {
    marginLeft: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  sectionTimelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTimelineTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  sectionTimelineTime: {
    color: '#fff',
    fontSize: 13,
  },
  sectionTimelineDescription: {
    color: '#fff',
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#222',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
