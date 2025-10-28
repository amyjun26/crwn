import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// UserHeader: Profile header with user stats
export default function UserHeader() {
  // Example user data - replace with real data
  const user = {
    name: 'Jessica Williams',
    username: '@jessicaw',
    followers: 1234,
    following: 567,
    avatar: 'placeholder.jpg'
  };

  return (
    <View style={styles.container}>
      {/* Avatar and Name */}
      <View style={styles.profile}>
        <View style={styles.avatarContainer}>
          {/* Replace with actual image */}
          <View style={styles.avatarPlaceholder} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>{user.username}</Text>
        </View>
      </View>

      {/* Followers/Following Stats */}
      <View style={styles.stats}>
        <TouchableOpacity style={styles.stat}>
          <Text style={styles.statNumber}>{user.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.stat}>
          <Text style={styles.statNumber}>{user.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  avatarContainer: {
    marginRight: 16
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e5e7eb'
  },
  nameContainer: {
    flex: 1
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4
  },
  username: {
    fontSize: 16,
    color: '#666'
  },
  stats: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 16
  },
  stat: {
    flex: 1,
    alignItems: 'center'
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4
  },
  statLabel: {
    fontSize: 14,
    color: '#666'
  }
});