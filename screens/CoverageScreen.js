import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';

const COVERED_ZIPCODES = [
  '33125', '33128', '33129', '33130', '33131', '33132', '33133', '33134',
  '33135', '33136', '33143', '33146', '33156', '33160', '33162', '33169', '33179', '33181'
];

export default function CoverageScreen({ navigation }) {
  const [zipcode, setZipcode] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredZipcodes = COVERED_ZIPCODES.filter(
    z => zipcode && z.startsWith(zipcode)
  );

  const handleCheckCoverage = () => {
    const zip = zipcode.trim();
    if (zip.length === 5 && /^\d+$/.test(zip)) {
      if (COVERED_ZIPCODES.includes(zip)) {
        navigation.navigate('CoverageConfirmation', { covered: true, zipcode: zip });
      } else {
        navigation.navigate('CoverageConfirmation', { covered: false, zipcode: zip });
      }
    }
  };

  const handleInputChange = (text) => {
    const clean = text.replace(/[^0-9]/g, '').slice(0, 5);
    setZipcode(clean);
    setShowSuggestions(clean.length > 0 && clean.length < 5);
  };

  const handleSuggestionPress = (zip) => {
    setZipcode(zip);
    setShowSuggestions(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://assets.withfra.me/Landing.3.png' }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Check if we cover your area</Text>
      <View style={styles.search}>
        <View style={styles.searchInput}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter your zipcode"
              placeholderTextColor="#9eadba"
              style={styles.input}
              value={zipcode}
              onChangeText={handleInputChange}
              onFocus={() => setShowSuggestions(zipcode.length > 0 && zipcode.length < 5)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              onSubmitEditing={handleCheckCoverage}
              keyboardType="number-pad"
              maxLength={5}
              returnKeyType="search"
            />
            <View style={styles.inputIcon}>
              <FeatherIcon color="#9eadba" name="map-pin" size={16} />
            </View>
            {showSuggestions && filteredZipcodes.length > 0 && (
              <View style={styles.suggestions}>
                {filteredZipcodes.map(zip => (
                  <TouchableOpacity
                    key={zip}
                    style={styles.suggestionItem}
                    onPress={() => handleSuggestionPress(zip)}
                  >
                    <Text style={styles.suggestionText}>{zip}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleCheckCoverage}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginLeft: 16,   // added margin to the left
    marginRight: 16,  // added margin to the right
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
    marginTop: 24,
    marginBottom: 16,
  },
  /** Hero */
  hero: {
    backgroundColor: '#d8dffe',
    margin: 12,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: '#fff2dd',
    transform: [
      {
        rotate: '-5deg',
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#281b52',
  },
  /** Action */
  action: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginHorizontal: 8,
    backgroundColor: '#e8f0f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  /** Search */
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
  },
  /** Input */
  input: {
    height: 44,
    backgroundColor: '#f0f6fb',
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#222',
    borderColor: '#222',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
    backgroundColor: 'transparent',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  suggestions: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    zIndex: 10,
  },
  suggestionItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  suggestionText: {
    fontSize: 15,
    color: '#222',
  },
});