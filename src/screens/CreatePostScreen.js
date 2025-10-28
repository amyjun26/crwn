import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// CreatePostScreen: Screen for creating new posts
export default function CreatePostScreen() {
  const [description, setDescription] = useState('');
  
  return (
    <View style={styles.container}>
      {/* Image Upload Section */}
      <TouchableOpacity style={styles.uploadSection}>
        <View style={styles.uploadPlaceholder}>
          <Ionicons name="camera" size={32} color="#666" />
          <Text style={styles.uploadText}>Tap to add photo</Text>
        </View>
      </TouchableOpacity>

      {/* Description Input */}
      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Write a description..."
          multiline
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {/* Tag Stylist Section */}
      <TouchableOpacity style={styles.tagSection}>
        <Ionicons name="person-add-outline" size={24} color="#2563eb" />
        <Text style={styles.tagText}>Tag your stylist</Text>
      </TouchableOpacity>

      {/* Post Button */}
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  uploadSection: {
    aspectRatio: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden'
  },
  uploadPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadText: {
    marginTop: 8,
    fontSize: 16,
    color: '#666'
  },
  inputSection: {
    marginBottom: 16
  },
  input: {
    height: 100,
    padding: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    fontSize: 16
  },
  tagSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 8
  },
  tagText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#2563eb'
  },
  postButton: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto'
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});