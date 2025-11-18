import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

// Tipagem dos animes
export type Anime = {
  id: string;
  title: string;
  image: any;
  subtitle: string;
};

const animes: Anime[] = [
  {
    id: '1',
    title: 'My Hero Academia',
    image: require('../../assets/animes/bokunohero2.png'),
    subtitle: 'Leg | Dub',
  },
  {
    id: '2',
    title: 'One Piece',
    image: require('../../assets/animes/onepeace.png'),
    subtitle: 'Leg | Dub',
  },
  {
    id: '3',
    title: 'Attack on Titan',
    image: require('../../assets/animes/titan.png'),
    subtitle: 'Leg | Dub',
  },
  {
    id: '4',
    title: 'Jujutsu Kaisen',
    image: require('../../assets/animes/jujutsu.png'),
    subtitle: 'Leg | Dub',
  },
  {
    id: '5',
    title: 'That Time I Got Reincarnated as a Slime',
    image: require('../../assets/animes/slime.png'),
    subtitle: 'Leg | Dub',
  },
];

const TrendingAnimes: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animes em alta no Brasil</Text>
      <FlatList
        data={animes}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.animeTitle}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TrendingAnimes;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 8,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 12,
  },
  row: {
    paddingHorizontal: 8,
  },
  card: {
    width: 160,
    alignItems: 'flex-start',
    marginRight: 16,
  },
  image: {
    width: 160,
    height: 220,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#222',
  },
  animeTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
    width: 160,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 12,
    width: 160,
  },
});
