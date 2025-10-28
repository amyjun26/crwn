import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// ThreadCard: Individual forum thread component with voting and interaction
export default function ThreadCard({ thread }) {
  // Example thread structure - replace with real data
  const exampleThread = {
    id: '1',
    title: 'Best products for low porosity hair?',
    author: 'CurlyGirl123',
    upvotes: 45,
    downvotes: 2,
    comments: 18,
    isBookmarked: false,
    timeAgo: '2h'
  };

  const { title, author, upvotes, downvotes, comments, isBookmarked, timeAgo } = thread || exampleThread;

  return (
    <View style={styles.container}>
      {/* Voting Section */}
      <View style={styles.voting}>
        <TouchableOpacity>
          <Ionicons name="chevron-up" size={24} color="#666" />
        </TouchableOpacity>
        <Text style={styles.voteCount}>{upvotes - downvotes}</Text>
        <TouchableOpacity>
          <Ionicons name="chevron-down" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.metadata}>
          <Text style={styles.author}>Posted by {author}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action}>
            <Ionicons name="chatbubble-outline" size={20} color="#666" />
            <Text style={styles.actionText}>{comments} comments</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action}>
            <Ionicons name={isBookmarked ? 'bookmark' : 'bookmark-outline'} size={20} color="#666" />
            <Text style={styles.actionText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb'
  },
  voting: {
    alignItems: 'center',
    marginRight: 16
  },
  voteCount: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  author: {
    fontSize: 14,
    color: '#666'
  },
  dot: {
    marginHorizontal: 4,
    color: '#666'
  },
  timeAgo: {
    fontSize: 14,
    color: '#666'
  },
  actions: {
    flexDirection: 'row',
    marginTop: 8
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16
  },
  actionText: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14
  }
});