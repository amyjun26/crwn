import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// NotificationsList: List of user notifications
export default function NotificationsList() {
  // Example notifications - replace with real data
  const notifications = [
    {
      id: '1',
      type: 'like',
      user: 'Sarah',
      content: 'liked your post',
      timeAgo: '2m',
      read: false
    },
    {
      id: '2',
      type: 'comment',
      user: 'Mike',
      content: 'commented: "Love this style!"',
      timeAgo: '15m',
      read: true
    },
    {
      id: '3',
      type: 'follow',
      user: 'Emma',
      content: 'started following you',
      timeAgo: '1h',
      read: true
    }
  ];

  const renderNotification = ({ item }) => {
    const { type, user, content, timeAgo, read } = item;
    
    return (
      <TouchableOpacity 
        style={[
          styles.notificationItem,
          !read && styles.unread
        ]}
      >
        {/* User Avatar */}
        <View style={styles.avatar} />
        
        {/* Notification Content */}
        <View style={styles.content}>
          <Text style={styles.message}>
            <Text style={styles.username}>{user}</Text> {content}
          </Text>
          <Text style={styles.time}>{timeAgo}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={notifications}
      keyExtractor={item => item.id}
      renderItem={renderNotification}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    backgroundColor: '#fff'
  },
  unread: {
    backgroundColor: '#f3f4f6'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e5e7eb',
    marginRight: 12
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  message: {
    fontSize: 14,
    marginBottom: 4
  },
  username: {
    fontWeight: '600'
  },
  time: {
    fontSize: 12,
    color: '#666'
  }
});