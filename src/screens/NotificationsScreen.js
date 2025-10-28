import React from 'react';
import { View, StyleSheet } from 'react-native';
import NotificationsList from '../components/NotificationsList';

// NotificationsScreen: Screen showing user notifications
export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <NotificationsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});