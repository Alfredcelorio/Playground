import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  Linking,
} from 'react-native';
import Swiper from 'react-native-swiper';
import FeatherIcon from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const items = [
  [
    { label: 'Model', value: 'P100D' },
    { label: 'Mileage', value: '22k mi' },
  ],
  [
    { label: 'Range', value: '396 mi' },
    { label: 'Top Speed', value: '200 mph' },
  ],
  [
    { label: 'Battery', value: '100kW/h' },
    { label: 'Peak Power', value: '1,020 hp' },
  ],
  [
    { label: '0-60 mph', value: '2.5 seconds' },
    { label: 'Cargo volume', value: '25 ft³' },
  ],
];
const IMAGES = [
  'https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzbGElMjBtb2RlbCUyMHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1639358336404-b847ac2a3272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  'https://images.unsplash.com/photo-1652509525608-6b44097ea5a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHRlc2xhJTIwbW9kZWwlMjBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
];

export default function CustomerDescription({ route }) {
  const { customer } = route.params;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <FeatherIcon
                  color="#000"
                  name="arrow-left"
                  size={24} />
              </TouchableOpacity>
            </View>

            <Text numberOfLines={1} style={styles.headerTitle}>
              {customer.name} - {customer.car}
            </Text>

            <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <FeatherIcon
                  color="#000"
                  name="more-vertical"
                  size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.photos}>
              <View style={styles.photosTop}>
                {/* Removed star and share buttons */}
              </View>

              <Swiper
                renderPagination={(index, total) => (
                  <View style={styles.photosPagination}>
                    <Text style={styles.photosPaginationText}>
                      {index + 1} of {total}
                    </Text>
                  </View>
                )}>
                {IMAGES.map((src, index) => (
                  <Image
                    alt=""
                    key={index}
                    source={{ uri: src }}
                    style={styles.photosImg} />
                ))}
              </Swiper>
            </View>

            {/* Customer Details Section */}
            <View style={styles.customerStats}>
              <View style={styles.customerStatsRow}>
                <View style={[styles.customerStatsItem, { borderLeftWidth: 0 }]}> 
                  <Text style={styles.customerStatsItemText}>Name</Text>
                  <Text style={styles.customerStatsItemValue}>{customer.name}</Text>
                </View>
                <View style={styles.customerStatsItem}>
                  <Text style={styles.customerStatsItemText}>Phone</Text>
                  <TouchableOpacity
                    onPress={() => {
                      const phone = customer.phone || '+15551234567';
                      const tel = phone.replace(/[^+\d]/g, '');
                      if (tel) {
                        Linking.openURL(`tel:${tel}`);
                      }
                    }}
                  >
                    <Text style={[styles.customerStatsItemValue, { color: '#4c6cfd', textDecorationLine: 'underline' }]}> 
                      {customer.phone || '+1 555-123-4567'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.customerStatsRow}>
                <View style={[styles.customerStatsItem, { borderLeftWidth: 0 }]}> 
                  <Text style={styles.customerStatsItemText}>Address</Text>
                  <TouchableOpacity
                    onPress={() => {
                      const address = customer.address || '123 Main St, Miami, FL 33133';
                      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                      Linking.openURL(url);
                    }}
                  >
                    <Text style={[styles.customerStatsItemValue, { color: '#4c6cfd', textDecorationLine: 'underline', textAlign: 'center', width: '100%' }]}> 
                      {customer.address || '123 Main St, Miami, FL 33133'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.customerStatsItem}>
                  <Text style={styles.customerStatsItemText}>License Plate</Text>
                  <Text style={styles.customerStatsItemValue}>{customer.licensePlate || 'ABC-1234'}</Text>
                </View>
              </View>
              <View style={styles.customerStatsRow}>
                <View style={[styles.customerStatsItem, { borderLeftWidth: 0 }]}> 
                  <Text style={styles.customerStatsItemText}>Recurrence</Text>
                  <Text style={styles.customerStatsItemValue}>{customer.recurrence || 'Monthly'}</Text>
                </View>
                <View style={styles.customerStatsItem}>
                  <Text style={styles.customerStatsItemText}>Type</Text>
                  <Text style={styles.customerStatsItemValue}>{customer.type || 'Sedan'}</Text>
                </View>
              </View>
              <View style={styles.customerStatsRow}>
                <View style={[styles.customerStatsItem, { borderLeftWidth: 0 }]}> 
                  <Text style={styles.customerStatsItemText}>Last Wash</Text>
                  <Text style={styles.customerStatsItemValue}>{customer.lastWash}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          {/* Go to Services Button Overlay */}
          <View style={styles.overlay}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.btnWrapper}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Go to Services</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerAction: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: '600',
    color: '#1d1d1d',
    marginLeft: 8,
    marginRight: 8,
  },
  photos: {
    position: 'relative',
    width: '100%',
    height: 240,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  photosTop: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  photosTopItem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photosPagination: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  photosPaginationText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  photosImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  customerStats: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  customerStatsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  customerStatsItem: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  customerStatsItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  customerStatsItemValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  detailsSection: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailIcon: {
    marginRight: 8,
  },
  detailLabel: {
    fontWeight: '600',
    color: '#333',
    marginRight: 4,
    minWidth: 70,
  },
  detailValue: {
    color: '#111',
    fontWeight: '400',
    flexShrink: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: {
    width: '80%',
    alignSelf: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#24232A',
    borderColor: '#24232A',
    width: '100%',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
