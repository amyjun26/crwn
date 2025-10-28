import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PostCard from './PostCard';

// PostList: Scrollable list of posts
export default function PostList() {
  // Example posts - replace with real data
  const posts = [
    {
      id: '1',
      image: 'placeholder1.jpg',
      description: 'New protective style for summer! 🌞',
      stylist: 'HairByJen',
      likes: 245,
      comments: 42
    },
    {
      id: '2',
      image: 'placeholder2.jpg',
      description: 'Trying out this new curl pattern 🌀',
      stylist: 'CurlyQueen',
      likes: 189,
      comments: 31
    }
  ];

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PostCard post={item} />}
      style={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});