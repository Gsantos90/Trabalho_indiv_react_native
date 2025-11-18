import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export type AnimeCardProps = {
  title: string;
  image: any;
};

const AnimeCard: React.FC<AnimeCardProps> = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AnimeCard;

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 12,
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#222',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
