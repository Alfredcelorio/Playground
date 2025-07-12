import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { mainStyles } from '../styles/MainStyles';

export default function BookingScreen({ navigate }) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.sheety.co/588339cffab6abef2cdfe8c83e6463e5/dataBase/sheet1')
      .then(res => res.json())
      .then(data => {
        setApiData(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message || 'Error fetching data');
        setLoading(false);
      });
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={mainStyles.screenContainer}>
      <View style={mainStyles.titleRow}>
        <Text style={mainStyles.mainTitle}>Book a Carwash</Text>
      </View>
      <Text style={[mainStyles.screenText, { textAlign: 'justify' }]}>
        Why This Booking Screen Is Taking Forever

        Oh, great, another “coming soon” screen that’s mocking us with its vague promises! Why does this booking page feel like it’s stuck in a time loop, forever on the verge of launching but never quite getting there? Let’s rip into the reasons this screen is dragging its digital feet.

        First off, the developers are probably lost in the labyrinth of their own code, wrestling with bugs that multiply like roaches. They thought they’d whip up a slick booking system in a week, but surprise! The database is throwing tantrums, the API keeps ghosting, and someone forgot to test it on Internet Explorer (yes, apparently, that’s still that). Every fix breaks something else, and now they’re stuck in a Sisyphean nightmare, pushing that boulder of a launch date.

        Then there’s the design team, who can’t decide if the “Book Now” button should be cerulean blue or slightly-less-cerulean blue. They’re holding marathon meetings to debate font weights and hover effects, because apparently, the fate of a universe hinges on whether the button has a 2-pixel or 3-pixel border radius. Meanwhile, the user experience is a fever dream of placeholder text and stock images, and that “coming soon” message might as well be tattooed on our retinas.

        Don’t even get me started on the higher-ups, who are probably meddling with every decision like they’re playing SimCity with the company budget. They keep pivoting the project to chase the latest buzzword—blockchain booking, anyone? Or maybe they’re waiting for the Mercury to exit retrograde before greenlighting the launch. Their “strategic vision” is a fancy way of saying they’re stalling, and that screen is just a shiny distraction from their indecision.
      </Text>
      {/* Show loading, error, or data */}
      {loading && <ActivityIndicator style={{ marginTop: 20 }} />}
      {error && <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>}
      {apiData && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>API Data:</Text>
          <Text style={{ fontFamily: 'monospace', fontSize: 13 }}>
            {JSON.stringify(apiData, null, 2)}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
