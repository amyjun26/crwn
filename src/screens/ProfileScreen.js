import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import UserHeader from '../components/UserHeader';
import HairProfile from '../components/HairProfile';
import ProfileTabs from '../components/ProfileTabs';

// ProfileScreen: User profile with hair details and activity
export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* User stats (followers/following) */}
      <UserHeader />
      
      {/* Hair type and characteristics */}
      <HairProfile />
      
      {/* Tabs for posts/activity/favorites */}
      <ProfileTabs />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});