import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import RecommendationSlider from '../components/RecommendationSlider';
import PostList from '../components/PostList';

// ExploreScreen: Main feed showing hair style posts and recommendations
export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      {/* Search bar for finding styles, stylists, or tags */}
      <SearchBar />
      
      {/* Horizontal scrolling recommendations */}
      <RecommendationSlider />
      
      {/* Scrollable feed of posts */}
      <PostList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});