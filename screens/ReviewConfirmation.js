import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.empty}>
        <Image
          alt=""
          source={{ uri: 'https://assets.withfra.me/EmptyState.3.png' }}
          style={styles.emptyImg} />

        <Text style={styles.emptyTitle}>Thank you!</Text>

        <Text style={styles.emptyDescription}>
          By the Uplift Team
        </Text>
      </View>
      <View style={{ paddingHorizontal: 24, marginBottom: 32 }}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress, e.g., navigation.goBack() or navigation.navigate('Home')
          }}>
          <View style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Go Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /** Empty */
  empty: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  emptyImg: {
    width: 300,
    height: 300,
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 14,
  },
  emptyDescription: {
    marginBottom: 24,
    paddingHorizontal: 48,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    color: '#8c9197',
    textAlign: 'center',
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