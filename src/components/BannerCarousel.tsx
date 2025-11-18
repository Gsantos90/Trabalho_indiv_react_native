import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const banners = [
  {
    id: '1',
    title: 'Gachiakuta',
    description:
      'Incriminado e jogado num abismo cheio de lixo, Rudo luta contra monstros e o sistema que o descartou.',
    image: require('../../assets/animes/gachiakuta_banner.png'),
    button: 'CONTINUAR ASSISTINDO E15',
  },
  {
    id: '2',
    title: 'My Hero Academia',
    description: 'Final Season',
    image: require('../../assets/animes/myhero_banner.png'),
    button: 'CONTINUAR ASSISTINDO',
  },
  {
    id: '3',
    title: 'Demon Slayer',
    description: 'Guerreiros da respiração enfrentam demônios terríveis.',
    image: require('../../assets/animes/demonslayer_banner.png'),
    button: 'CONTINUAR ASSISTINDO',
  },
];

const { width } = Dimensions.get('window');
const HEIGHT = 260;

const BannerCarousel: React.FC = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (isInteracting.current) return;
      const next = (index + 1) % banners.length;
      scrollToIndex(next);
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const scrollToIndex = (i: number) => {
    const x = i * width;
    if (scrollRef.current && typeof scrollRef.current.scrollTo === 'function') {
      scrollRef.current.scrollTo({ x, animated: true });
      setIndex(i);
    }
  };

  const onScrollEnd = (e: any) => {
    const x = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(x / width);
    if (newIndex !== index) setIndex(newIndex);
  };

  const handleTouchStart = () => {
    isInteracting.current = true;
    stopAutoplay();
  };

  const handleTouchEnd = () => {
    isInteracting.current = false;
    setTimeout(() => startAutoplay(), 800);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        onScrollBeginDrag={handleTouchStart}
        onScrollEndDrag={handleTouchEnd}
      >
        {banners.map((item) => (
          <View key={item.id} style={[styles.banner, { width: width }]}> 
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            {/* Gradiente superior para contraste */}
            <LinearGradient
              colors={["rgba(0,0,0,0.7)", "transparent"]}
              style={styles.topGradient}
            />
            {/* Gradiente inferior para destaque do texto */}
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.85)"]}
              style={styles.bottomGradient}
            />
            {/* Ícone Crunchyroll no topo esquerdo */}
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/crunchyroll.png' }}
              style={styles.brandIcon}
            />
            {/* Bloco de informações sobre o anime */}
            <View style={styles.overlay} pointerEvents="none">
              <Text style={styles.bannerTitle}>{item.title}</Text>
              <View style={styles.infoRow}>
                <View style={styles.ratingBox}><Text style={styles.ratingText}>A16</Text></View>
                <Text style={styles.infoText}>Dub Português | Leg Português</Text>
                <Text style={styles.infoText}>• Action, Fantasy, Drama</Text>
              </View>
              <Text style={styles.desc} numberOfLines={3} ellipsizeMode="tail">
                {item.description}
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>▶ {item.button}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookmarkBtn} onPress={() => {}}>
                  <Text style={styles.bookmarkIcon}>🔖</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicators} pointerEvents="box-none">
        {banners.map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => scrollToIndex(i)}
            
          >
            <View style={[styles.dot, i === index ? styles.dotActive : null]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BannerCarousel;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT + 28,
    backgroundColor: '#000',
  },
  banner: {
    height: HEIGHT,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: HEIGHT,
  },
  overlay: {
    position: 'absolute',
    left: 20,
    top: 92,
    right: 20,
  },
  bannerTitle: {
    color: '#ff2d00',
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 8,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 8,
  },
  ratingBox: {
    backgroundColor: '#ff2d00',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 6,
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  infoText: {
    color: '#fff',
    fontSize: 12,
    marginRight: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  bookmarkBtn: {
    marginLeft: 12,
    borderWidth: 2,
    borderColor: '#ff8000',
    borderRadius: 8,
    padding: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  bookmarkIcon: {
    fontSize: 22,
    color: '#ff8000',
  },
  desc: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#ff8000',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  indicators: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 80,
  },
  brandIcon: {
    position: 'absolute',
    left: 12,
    top: 32,
    width: 44,
    height: 44,
    zIndex: 20,
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#ff8000',
  },
});
