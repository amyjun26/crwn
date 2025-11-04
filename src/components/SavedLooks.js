import React from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
import { SAVED_LOOKS } from '../data/posts';

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const tileSize = screenWidth / numColumns;

export default function SavedLooks() {
  const renderItem = ({ item }) => (
    <View style={styles.tile}>
      <Image 
        source={item.imageSource}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <FlatList
      data={SAVED_LOOKS}
      renderItem={renderItem}
      numColumns={numColumns}
      keyExtractor={item => item.id}
      style={styles.grid}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1
  },
  tile: {
    width: tileSize,
    height: tileSize,
    padding: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});