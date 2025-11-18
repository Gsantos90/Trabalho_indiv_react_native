import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import AnimeCard from '../components/AnimeCard/AnimeCard';
import BannerCarousel from '../components/BannerCarousel';
import BottomNav from '../components/BottomNav/BottomNav';
import SectionRow from '../components/SectionRow/SectionRow';
import TrendingAnimes from '../components/TrendingAnimes';
import styles from './HomeScreen.style';
import { Image } from 'react-native';

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
        {/* Bloco de filmes Crunchyroll Brasil */}
        <View style={{ marginBottom: 32 }}>
          <Text style={[styles.header, { fontSize: 22, marginBottom: 0 }]}>Filmes já disponíveis na Crunchyroll Brasil!</Text>
          <Text style={{ color: '#f3efefff', marginLeft: 16, marginBottom: 8, fontSize: 14 }}>Pegue a pipoca!</Text>
          <FlatList
            data={filmes}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
            renderItem={({ item }) => (
              <View style={{ width: 160, marginRight: 16 }}>
                <Image source={item.image} style={{ width: 160, height: 220, borderRadius: 8, marginBottom: 8, backgroundColor: '#222' }} resizeMode="cover" />
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15, marginBottom: 2 }}>{item.title}</Text>
                <Text style={{ color: '#ccc', fontSize: 12 }}>{item.subtitle}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
};

const filmes = [
  {
    id: 'f1',
    title: 'Dragon Ball (Filmes)',
    image: require('../../assets/animes/dragonball.png'), // Troque para o poster correto
    subtitle: 'Leg | Dub',
  },
  {
    id: 'f2',
    title: 'SPY x FAMILY',
    image: require('../../assets/animes/spy.png'), // Troque para o poster correto
    subtitle: 'Leg | Dub',
  },
  {
    id: 'f3',
    title: 'Attack on Titan',
    image: require('../../assets/animes/titan.png'),
    subtitle: 'Leg | Dub',
  },
  {
    id: 'f4',
    title: 'Bungo Stray Dogs',
    image: require('../../assets/animes/jujutsu.png'), // Troque para o poster correto
    subtitle: 'Leg | Dub',
  },
  {
    id: 'f5',
    title: 'Code Geass',
    image: require('../../assets/animes/slime.png'), // Troque para o poster correto
    subtitle: 'Leg | Dub',
  },
];
export default HomeScreen;
