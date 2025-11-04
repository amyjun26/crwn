import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import PostCard from './PostCard';
import SavedLooks from './SavedLooks';
import { POSTS } from '../data/posts';

// ProfileTabs: Tabbed view of user's posts, activity, and favorites
export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('favorites');

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <FlatList
            data={POSTS}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PostCard post={item} />}
          />
        );
      case 'activity':
        return (
          <View style={styles.emptyState}>
            <Text>Recent activity will appear here</Text>
          </View>
        );
      case 'favorites':
        return <SavedLooks />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'posts' && styles.activeTab]}
          onPress={() => setActiveTab('posts')}
        >
          <Text style={[styles.tabText, activeTab === 'posts' && styles.activeTabText]}>
            Posts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'activity' && styles.activeTab]}
          onPress={() => setActiveTab('activity')}
        >
          <Text style={[styles.tabText, activeTab === 'activity' && styles.activeTabText]}>
            Activity
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'favorites' && styles.activeTab]}
          onPress={() => setActiveTab('favorites')}
        >
          <Text style={[styles.tabText, activeTab === 'favorites' && styles.activeTabText]}>
            Favorites
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.content}>
        {renderContent()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb'
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center'
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2563eb'
  },
  tabText: {
    fontSize: 14,
    color: '#666'
  },
  activeTabText: {
    color: '#2563eb',
    fontWeight: '600'
  },
  content: {
    flex: 1
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32
  }
});