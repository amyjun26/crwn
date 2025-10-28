import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// HairProfile: User's hair characteristics
export default function HairProfile() {
  // Example hair profile data - replace with real data
  const hairProfile = {
    type: 'Coily (4A)',
    porosity: 'Low',
    density: 'High',
    characteristics: ['Color treated', 'Heat trained']
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hair Profile</Text>
      
      <View style={styles.characteristicsContainer}>
        <View style={styles.characteristic}>
          <Text style={styles.label}>Hair Type</Text>
          <Text style={styles.value}>{hairProfile.type}</Text>
        </View>

        <View style={styles.characteristic}>
          <Text style={styles.label}>Porosity</Text>
          <Text style={styles.value}>{hairProfile.porosity}</Text>
        </View>

        <View style={styles.characteristic}>
          <Text style={styles.label}>Density</Text>
          <Text style={styles.value}>{hairProfile.density}</Text>
        </View>
      </View>

      <View style={styles.tags}>
        {hairProfile.characteristics.map((char, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{char}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8fafc',
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16
  },
  characteristicsContainer: {
    marginBottom: 16
  },
  characteristic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  label: {
    fontSize: 14,
    color: '#666'
  },
  value: {
    fontSize: 14,
    fontWeight: '500'
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8
  },
  tagText: {
    fontSize: 14,
    color: '#374151'
  }
});