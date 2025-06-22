import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Linking,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const customers = [

  { name: 'David Munoz', car: 'BMW M3', lastWash: '14 days ago' },
  { name: 'Oscar Wall', car: 'Audi Q5', lastWash: '10 days ago' },
  { name: 'Oscar Perez', car: 'Hyundai Elantra', lastWash: '18 days ago' },
  { name: 'Michelle Grillone', car: 'Mazda CX-5', lastWash: '22 days ago' },
  { name: 'Farah Khan', car: 'Kia Sorento', lastWash: '19 days ago' },
  { name: 'Juan Carlos Ortigosa', car: 'Volkswagen Jetta', lastWash: '17 days ago' },
  { name: 'Maryosky Guaita', car: 'Honda Civic', lastWash: '21 days ago' },
  { name: 'Cristina Landes', car: 'Subaru Outback', lastWash: '23 days ago' },
  { name: 'Philippe Del Castillo', car: 'Mercedes-Benz C300', lastWash: '16 days ago' },
  { name: 'Diego Valdez', car: 'Ford Mustang', lastWash: '20 days ago' },
  { name: 'Joe Khoury', car: 'Nissan Altima', lastWash: '15 days ago' },
  { name: 'Marco Nava', car: 'Toyota Corolla', lastWash: '24 days ago' },
  { name: 'Adriana D Vivas Rojas', car: 'Chevrolet Equinox', lastWash: '13 days ago' },
  { name: 'Andres D Alonso', car: 'Jeep Wrangler', lastWash: '12 days ago' },

];

function parseDays(lastWash) {
  // Extract the number of days from the string, e.g., "25 days ago" -> 25
  const match = lastWash.match(/(\d+)\s*days?/i);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  // Sort customers by days since last wash, descending (most days ago first)
  const sortedCustomers = [...customers].sort(
    (a, b) => parseDays(b.lastWash) - parseDays(a.lastWash)
  );

  // Filter customers by search
  const filteredCustomers = sortedCustomers.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.car.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      {/* Customers title at the very top */}
      <Text style={styles.title}> Cars Subscribed ({filteredCustomers.length})</Text>
      {/* Functional Search Bar */}
      <View style={styles.searchWrapper}>
        <FeatherIcon color="blue" name="search" size={17} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Customers"
          placeholderTextColor="#848484"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {filteredCustomers.map((customer, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('CustomerDescription', { customer })}
          >
            <View style={styles.cardIcon}>
              <FeatherIcon color="#131313" name="user-check" size={20} />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{customer.name}</Text>
              <Text style={styles.cardCategory}>{customer.car}</Text>
            </View>
            <Text style={styles.cardPrice}>{customer.lastWash}</Text>
          </TouchableOpacity>
        ))}
        {/* Customer Details Section */}
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
    color: '#black',
    fontSize: 19,
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 'auto',
  },
  headerButton: {
    paddingHorizontal: 8,
  },
  container: {
    padding: 24,
    paddingTop: 0, // Remove extra space between title and cards
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 0,
    marginTop: 24,
    paddingLeft: 12,
  },
  searchWrapper: {
    paddingTop: 8,
    paddingHorizontal: 24, // Increased horizontal padding for more space on the sides
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#efefef',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 16,
    fontWeight: '500',
    color: '#131313',
    marginLeft: 8,
    flex: 1,
    paddingVertical: 4,
    backgroundColor: 'transparent',
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 8, // Added padding to the left
  },
  cardIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  cardBody: {
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#131313',
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7f7f7f',
  },
  cardPrice: {
    marginLeft: 'auto',
    fontSize: 14,
    fontWeight: '500',
    color: '#7f7f7f',
  },
});