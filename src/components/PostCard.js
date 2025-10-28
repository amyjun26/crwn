import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// PostCard: Individual post component showing image, description, and interactions
export default function PostCard({ post }) {
  // Example post structure - replace with real data
  const examplePost = {
    id: '1',
    image: 'placeholder.jpg',
    description: 'Love this new style! 💇‍♀️✨',
    stylist: 'Sarah Style',
    likes: 128,
    comments: 24
  };

  const { image, description, stylist, likes, comments } = post || examplePost;

  return (
    <View style={styles.container}>
      {/* Post Image */}
      <View style={styles.imageContainer}>
        {/* Replace with actual image */}
        <View style={styles.imagePlaceholder} />
      </View>

      {/* Description and Stylist */}
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.stylist}>Stylist: {stylist}</Text>
      </View>

      {/* Interaction Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={24} color="#666" />
          <Text style={styles.actionText}>{likes}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#666" />
          <Text style={styles.actionText}>{comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 16
  },
  imageContainer: {
    width: '100%',
    height: 300
  },
  imagePlaceholder: {
    backgroundColor: '#e5e7eb',
    width: '100%',
    height: '100%'
  },
  content: {
    padding: 16
  },
  description: {
    fontSize: 16,
    marginBottom: 8
  },
  stylist: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '500'
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 12
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20
  },
  actionText: {
    marginLeft: 4,
    color: '#666'
  }
});