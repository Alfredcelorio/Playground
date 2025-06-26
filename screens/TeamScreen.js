import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';

export default function Example() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <FeatherIcon
                  color="#0e0e0e"
                  name="x"
                  size={24} />
              </TouchableOpacity>
            </View>

            <Text numberOfLines={1} style={styles.headerTitle}>
             Uplift service
            </Text>

            <View
              style={[styles.headerAction, { alignItems: 'flex-end' }]} />
          </View>

          <ScrollView
            contentContainerStyle={styles.receipt}
            showsVerticalScrollIndicator={false}>
            <View style={styles.receiptLogo}>
              <FeatherIcon color="#fff" name="codepen" size={32} />
            </View>

            <Text style={styles.receiptTitle}>
              Alvaro Celorio
            </Text>

            <Text style={styles.receiptSubtitle}>Invoice #0012-2832</Text>

            {/* Removed receiptPrice section */}

            {/* Removed receiptDescription, avatarWrapper, and divider sections */}

            <View style={styles.details}>
              <Text style={styles.detailsTitle}>Service Details</Text>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Created At</Text>
                <Text style={styles.detailsValue}>Wed Feb 26 2025</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Scheduled Date</Text>
                <Text style={styles.detailsValue}>Tue Feb 25 2025</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Scheduled Time</Text>
                <Text style={styles.detailsValue}>10:00 AM</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Email</Text>
                <Text style={styles.detailsValue}>Alvaro@uplifttheapp.com</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Phone</Text>
                <TouchableOpacity
                  onPress={() => {
                    const phone = '+15551234567';
                    const tel = phone.replace(/[^+\d]/g, '');
                    if (tel) {
                      Linking.openURL(`tel:${tel}`);
                    }
                  }}
                >
                  <Text style={[styles.detailsValue, { color: '#4c6cfd', textDecorationLine: 'underline' }]}>+1 555-123-4567</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Name</Text>
                <Text style={styles.detailsValue}>Alvaro</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Vehicle</Text>
                <Text style={styles.detailsValue}>Tesla Model S - 747tks</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Address</Text>
                <TouchableOpacity
                  onPress={() => {
                    const address = '123 Main St, Miami, FL 33133';
                    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                    Linking.openURL(url);
                  }}
                >
                  <Text style={[styles.detailsValue, { color: '#4c6cfd', textDecorationLine: 'underline' }]}>123 Main St, Miami, FL 33133</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Last Service Date</Text>
                <Text style={styles.detailsValue}>Mon Mar 10 2025</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Last Wash</Text>
                <Text style={styles.detailsValue}>27 days ago</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Type</Text>
                <Text style={styles.detailsValue}>sedan</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Complete wash</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Upload pictures</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'center',
  },
  /** Receipt */
  receipt: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 140,
  },
  receiptLogo: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginBottom: 12,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiptTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 2,
  },
  receiptSubtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: '#818181',
    marginBottom: 12,
  },
  /** Details */
  details: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  detailsTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 16,
  },
  detailsRow: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  detailsField: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#8c8c8c',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  detailsValue: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    color: '#444',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'right',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#8338ec',
    borderColor: '#8338ec',
    marginBottom: 12,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#8338ec',
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#8338ec',
  },
});