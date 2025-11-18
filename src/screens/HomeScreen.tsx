import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import AnimeCard from '../components/AnimeCard/AnimeCard';
import BannerCarousel from '../components/BannerCarousel';
import BottomNav from '../components/BottomNav/BottomNav';
import SectionRow from '../components/SectionRow/SectionRow';
import TrendingAnimes from '../components/TrendingAnimes';
import styles from './HomeScreen.style';

interface Anime {
  id: string;
  title: string;
  image: any;
}

interface SuaListaItem {
  id: string;
  title: string;
  subtitle: string;
  image: any;
}

const animes: Anime[] = [
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

const suaLista: SuaListaItem[] = [
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
    title: 'Jujutsu Kaisen',
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

const mmToDp = (mm: number) => Math.round((mm * 160) / 25.4);
const gap1mm = mmToDp(1); // ~6 dp

const HomeScreen: React.FC = () => {
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
        <SectionRow
          title="Sua Lista"
          data={suaLista}
          style={{ marginTop: gap1mm }}
        />
        <View style={{ marginBottom: 32 }}>
          <TrendingAnimes />
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
};

export default HomeScreen;
