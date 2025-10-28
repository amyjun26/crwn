import React from 'react';
import { View, StyleSheet } from 'react-native';
import ThreadList from '../components/ThreadList';

// CommunityScreen: Forum-style discussion page
export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <ThreadList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});