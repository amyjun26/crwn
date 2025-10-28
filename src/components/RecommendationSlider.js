import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

// RecommendationSlider: Horizontal scrolling recommendations
export default function RecommendationSlider() {
  // Example recommendations - replace with real data
  const recommendations = [
    { id: '1', title: 'Trending', image: 'placeholder.jpg' },
    { id: '2', title: 'New Stylists', image: 'placeholder.jpg' },
    { id: '3', title: 'Popular', image: 'placeholder.jpg' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recommended</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {recommendations.map(item => (
          <TouchableOpacity key={item.id} style={styles.item}>
            <View style={styles.imageContainer}>
              {/* Replace with actual images */}
              <View style={styles.imagePlaceholder} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 8
  },
  scrollView: {
    paddingLeft: 16
  },
  item: {
    marginRight: 16,
    width: 120,
    alignItems: 'center'
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 10,
    overflow: 'hidden'
  },
  imagePlaceholder: {
    backgroundColor: '#e5e7eb',
    width: '100%',
    height: '100%'
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500'
  }
});