import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import AnimeCard from '../components/AnimeCard';
import BannerCarousel from '../components/BannerCarousel';
// TopNav removed per request
import BottomNav from '../components/BottomNav';
import SectionRow from '../components/SectionRow';
import TrendingAnimes from '../components/TrendingAnimes';

const animes = [
  {
    id: '1',
    title: 'Mob Psycho 100',
    image: require('../../assets/animes/mobpsycho100.png'),
  },
  {
    id: '2',
    title: 'Naruto Shippuden',
    image: require('../../assets/animes/naruto_shippuden.png'),
  },
  {
    id: '3',
    title: 'Naruto',
    image: require('../../assets/animes/naruto.png'),
  },
  {
    id: '4',
    title: 'Shangri-La Frontier',
    image: require('../../assets/animes/shangrila_frontier.png'),
  },
  {
    id: '5',
    title: 'Boruto',
    image: require('../../assets/animes/boruto.png'),
  },
];

export default function HomeScreen() {
  const mmToDp = (mm) => Math.round((mm * 160) / 25.4);
  const gap1mm = mmToDp(1); // ~6 dp

  // Dados de exemplo para "Sua Lista"
  const suaLista = [
    {
      id: 's1',
      title: 'My Hero Academia',
      subtitle: 'Assistir de Novo: T8 E166',
      image: require('../../assets/animes/bokunohero2.png'),
    },
    {
      id: 's2',
      title: 'One Piece',
      subtitle: 'Continuar: T1 E6',
      image: require('../../assets/animes/onepeace.png'),
    },
    {
      id: 's3',
      title: 'Attack on Titan',
      subtitle: 'Continuar: T1 E12',
      image: require('../../assets/animes/titan.png'),
    },
    {
      id: 's4',
      title: 'JUJUTSU KAISEN',
      subtitle: 'Continuar: T2 E1',
      image: require('../../assets/animes/jujutsu.png'),
    },
    {
      id: 's5',
      title: 'Slime',
      subtitle: 'Continuar: T3 E1',
      image: require('../../assets/animes/slime.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <BannerCarousel />

        <View style={[styles.section, { marginBottom: 8 }]}> 
          <Text style={styles.header}>Animes Grátis para Assistir no Brasil</Text>
          <FlatList
            data={animes}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <AnimeCard title={item.title} image={item.image} />}
            style={styles.list}
          />
        </View>

        {/* Sua Lista section as requested (independent horizontal scroll) */}
        <SectionRow
          title="Sua Lista"
          data={suaLista}
          style={{ marginTop: gap1mm }}
        />

        {/* Bloco Animes em alta no Brasil */}
        <View style={{ marginBottom: 32 }}>
          <TrendingAnimes />
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 8,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
  },
  list: {
    paddingLeft: 8,
  },
  section: {
    paddingTop: 6,
    paddingBottom: 20,
  },
});
