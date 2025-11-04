import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PostCard from './PostCard';
import { POSTS } from '../data/posts';

// PostList: Scrollable list of posts
export default function PostList() {
  const posts = POSTS;

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