import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// SearchBar: Component for searching posts, styles, and stylists
export default function SearchBar({ onSearch }) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search styles, stylists, or tags..."
        placeholderTextColor="#666"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    margin: 16,
    padding: 10,
    borderRadius: 10
  },
  icon: {
    marginRight: 8
  },
  input: {
    flex: 1,
    fontSize: 16
  }
});