import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { mainStyles } from '../styles/MainStyles';
import { useNavigation } from '@react-navigation/native';

// Victor Celorio bio screen
const VictorCelorioScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#111' }}>
      {/* Back to Home Button */}
      <View style={{ padding: 20, paddingBottom: 0 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{ marginBottom: 10, alignSelf: 'flex-start' }}
        >
          <Text style={{ color: '#3b82f6', fontSize: 16, textDecorationLine: 'underline' }}>
            ← Back to Home
          </Text>
        </TouchableOpacity>
      </View>
      {/* Hero Section */}
      <View style={{ backgroundColor: '#111', padding: 20, alignItems: 'flex-start', paddingTop: 0 }}>
        <Text style={[mainStyles.mainTitle, { textAlign: 'left', marginTop: 0 }]}>
          Víctor Celorio
        </Text>
        <Text style={[mainStyles.screenText, { color: '#e5e7eb', fontSize: 18, textAlign: 'justify' }]}>
          Mexican-American Inventor, Author, and Air-Cleaning Visionary
        </Text>
      </View>

      {/* About Section */}
      <View style={{ padding: 20 }}>
        <Text style={[mainStyles.screenTitle, { color: '#fff', fontSize: 24, marginBottom: 10 }]}>About</Text>
        <Text style={[mainStyles.screenText, { color: '#ccc', fontSize: 16, lineHeight: 24, textAlign: 'justify' }]}>
          Víctor Manuel Celorio Garrido, born July 27, 1957, in Mexico City, is a Mexican-American author, entrepreneur, inventor, and former union organizer. Based in Gainesville, Florida, he’s best known for inventing InstaBook, a pioneering digital printing technology. A man of many talents, he’s also a passionate writer and founder of Pulmón Urbano, a nonprofit tackling urban air pollution.
        </Text>
      </View>

      {/* Inventions Section */}
      <View style={{ padding: 20 }}>
        <Text style={[mainStyles.screenTitle, { color: '#fff', fontSize: 24, marginBottom: 10 }]}>Inventions</Text>
        <View>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff', marginTop: 10, marginBottom: 5 }}>InstaBook</Text>
          <Text style={[mainStyles.screenText, { color: '#ccc', fontSize: 16, lineHeight: 24, textAlign: 'justify' }]}>
            Celorio’s InstaBook, or Book On Demand, revolutionized publishing with on-demand digital printing. He patented this tech and founded InstaBook Corporation in the 90s, creating a network of print-on-demand centers starting in Mexico City. This guy basically made instant books a thing.
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff', marginTop: 10, marginBottom: 5 }}>Kinetic Lung</Text>
          <Text style={[mainStyles.screenText, { color: '#ccc', fontSize: 16, lineHeight: 24, textAlign: 'justify' }]}>
            In 2019, Celorio patented Kinetic Lung, a tech that uses kinetic energy to filter toxic PM2.5 and PM10 particles from urban air. Through his nonprofit Pulmón Urbano, he deployed 300 Residential Lungs and 10 Solar Lungs in Mexicali, cleaning millions of cubic meters of air daily and slashing pollution by 35% by October 2019. Bad air? Not on his watch.
          </Text>
        </View>
      </View>

      {/* Bibliography Section */}
      <View style={{ padding: 20 }}>
        <Text style={[mainStyles.screenTitle, { color: '#fff', fontSize: 24, marginBottom: 10 }]}>Bibliography</Text>
        <Text style={[mainStyles.screenText, { color: '#ccc', fontSize: 16, lineHeight: 24, textAlign: 'justify' }]}>
          Celorio’s love for writing started young, publishing his first short story at 14. Here’s a rundown of his six published books:
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 16, color: '#ccc', marginBottom: 5 }}>
            • <Text style={{ fontWeight: 'bold', color: '#fff' }}>Espejo de Obsidiana</Text> (1981, ISBN 1-891355-09-0) - Short-story collection
          </Text>
          <Text style={{ fontSize: 16, color: '#ccc', marginBottom: 5 }}>
            • <Text style={{ fontWeight: 'bold', color: '#fff' }}>El Unicornio Azul</Text> (1985, ISBN 1-58396-063-5) - Novel, fiction
          </Text>
          <Text style={{ fontSize: 16, color: '#ccc', marginBottom: 5 }}>
            • <Text style={{ fontWeight: 'bold', color: '#fff' }}>The Blue Unicorn</Text> (1990, ISBN 1-58396-064-3) - Novel, fiction
          </Text>
          <Text style={{ fontSize: 16, color: '#ccc', marginBottom: 5 }}>
            • <Text style={{ fontWeight: 'bold', color: '#fff' }}>Proyecto Mexico</Text> (1995, ISBN 1-58396-059-7) - Political essay, one of the first books distributed online
          </Text>
          <Text style={{ fontSize: 16, color: '#ccc', marginBottom: 5 }}>
            • <Text style={{ fontWeight: 'bold', color: '#fff' }}>Blood Relatives</Text> (1997, ISBN 1-891355-66-X) - Fiction
          </Text>
          <Text style={{ fontSize: 16, color: '#ccc', marginBottom: 5 }}>
            • <Text style={{ fontWeight: 'bold', color: '#fff' }}>Twisted Gods</Text> (1999, ISBN 1-891355-91-0) - Fiction thriller
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={{ padding: 20, alignItems: 'center', backgroundColor: '#1f2937' }}>
        <TouchableOpacity onPress={() => Linking.openURL('http://www.victorcelorio.com')}>
          <Text style={{ fontSize: 16, color: '#3b82f6', textDecorationLine: 'underline' }}>
            Learn more at victorcelorio.com
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default VictorCelorioScreen;
