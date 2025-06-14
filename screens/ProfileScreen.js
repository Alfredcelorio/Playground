import React, { useMemo } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  Linking,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { mainStyles } from '../styles/MainStyles';

const products = [
  {
    img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80', // car image
    title: 'John Doe',
    price: '+1 555-123-4567',
    stars: 'Monthly',
    oldPrice: '25 days ago',
    reviews: '',
    address: '3130 bird ave, miami fl 33133',
  },
  {
    img: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80', // car image
    title: 'Jane Smith',
    price: '+1 555-987-6543',
    stars: 'Weekly',
    oldPrice: '25 days ago',
    reviews: '',
    address: '3130 bird ave, miami fl 33133',
  },
  {
    img: 'https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80', // car image
    title: 'Carlos Rivera',
    price: '+1 555-222-3333',
    stars: 'Monthly',
    oldPrice: '25 days ago',
    reviews: '',
    address: '3130 bird ave, miami fl 33133',
  },
  {
    img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80', // car image
    title: 'Emily Chen',
    price: '+1 555-444-5555',
    stars: 'Bi-Weekly',
    oldPrice: '25 days ago',
    reviews: '',
    address: '3130 bird ave, miami fl 33133',
  },
  {
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', // car image
    title: 'Ahmed Ali',
    price: '+1 555-666-7777',
    stars: 'Monthly',
    oldPrice: '25 days ago',
    reviews: '',
    address: '3130 bird ave, miami fl 33133',
  },
];

export default function Example({ navigate }) {
  const rows = useMemo(() => {
    // group products into rows of 2
    const rows = [];

    for (let i = 0; i < products.length; i += 2) {
      rows.push(products.slice(i, i + 2));
    }

    return rows;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            if (typeof navigate === 'function') navigate('Home');
          }}>
          <FeatherIcon
            color="#1d1d1d"
            name="chevron-left"
            size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Uplift</Text>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
          style={styles.headerButton}>
          <FeatherIcon
            color="#1d1d1d"
            name="more-horizontal"
            size={19} />
        </TouchableOpacity>
      </View>

      {/* Move Customers title out of ScrollView */}
      <Text style={mainStyles.mainTitle}>Customers</Text>
      <ScrollView contentContainerStyle={styles.section}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.sectionRow}>
            {row.map(
              ({ img, title, price, stars, oldPrice, reviews, address }, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.card}>
                    <Image
                      alt=""
                      source={{ uri: img }}
                      style={styles.cardPreview} />
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{title}</Text>
                      <View style={styles.cardRow}>
                        <Text style={styles.cardStars}>{stars}</Text>
                        <FontAwesome
                          color="#1d1d1d"
                          name="star"
                          size={9}
                          solid={true} />
                        <Text style={styles.cardStars}> ({reviews})</Text>
                      </View>
                      <View style={styles.cardRow}>
                        <TouchableOpacity
                          onPress={() => {
                            const phone = price.replace(/[^+\d]/g, '');
                            Linking.openURL(`tel:${phone}`);
                          }}
                        >
                          <Text style={styles.cardPriceLink}>
                            {price}
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.cardPriceOld}>
                          {oldPrice}
                        </Text>
                      </View>
                      {/* New: Clickable address */}
                      {address && (
                        <View style={styles.cardRow}>
                          <TouchableOpacity
                            onPress={() => {
                              const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                              Linking.openURL(url);
                            }}
                          >
                            <Text style={styles.cardAddressLink}>Go to this address</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              },
            )}
          </View>
        ))}
        {/* Back to Home button */}
        <View style={styles.center}>
          <TouchableOpacity
            onPress={() => {
              if (typeof navigate === 'function') navigate('Home');
            }}
            style={styles.backButtonContainer}
          >
            <Text style={styles.backButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /** Header */
  header: {
    paddingHorizontal: 8,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 'auto',
  },
  headerButton: {
    paddingHorizontal: 8,
  },
  /** Section */
  section: {
    marginTop: 0,
    paddingBottom: 48,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  /** Card */
  card: {
    position: 'relative',
    marginHorizontal: 4,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
  },
  cardPreview: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  cardAction: {
    position: 'absolute',
    top: 8,
    right: 12,
    width: 26,
    height: 26,
    backgroundColor: 'rgba(150, 150, 150, 0.66)',
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    paddingVertical: 8,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  cardRow: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardStars: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
  },
  cardPrice: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  cardPriceOld: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 4,
  },
  cardPriceLink: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  center: {
    alignItems: 'center',
    marginTop: 24,
  },
  backButtonContainer: {
    backgroundColor: '#222',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 28,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  cardAddressLink: {
    color: '#4FC3F7',
    fontSize: 13,
    textDecorationLine: 'underline',
    marginLeft: 0,
  },
});