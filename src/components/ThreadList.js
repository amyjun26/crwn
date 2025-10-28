import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ThreadCard from './ThreadCard';

// ThreadList: Scrollable list of forum threads
export default function ThreadList() {
  // Example threads - replace with real data
  const threads = [
    {
      id: '1',
      title: 'Best products for low porosity hair?',
      author: 'CurlyGirl123',
      upvotes: 45,
      downvotes: 2,
      comments: 18,
      isBookmarked: false,
      timeAgo: '2h'
    },
    {
      id: '2',
      title: 'How often do you deep condition?',
      author: 'HairCare101',
      upvotes: 32,
      downvotes: 1,
      comments: 24,
      isBookmarked: true,
      timeAgo: '4h'
    }
  ];

  return (
    <FlatList
      data={threads}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ThreadCard thread={item} />}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff'
  }
});