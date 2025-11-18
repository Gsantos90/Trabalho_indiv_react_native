import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export type Anime = {
  id: string;
  title: string;
  subtitle: string;
  image: any;
};

export type SectionRowProps = {
  title: string;
  data?: Anime[];
  style?: any;
};

const SectionRow: React.FC<SectionRowProps> = ({ title, data = [], style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>VER FILA</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.cardSubtitle} numberOfLines={1}>{item.subtitle}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SectionRow;

const styles = StyleSheet.create({
  container: { paddingVertical: 0 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, marginBottom: 0 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  seeAll: { color: '#bbb', fontSize: 12 },
  card: { width: 160, marginLeft: 12 },
  image: { width: 160, height: 90, borderRadius: 6, backgroundColor: '#222' },
  cardTitle: { color: '#fff', fontWeight: '600', marginTop: 8 },
  cardSubtitle: { color: '#bbb', fontSize: 12, marginTop: 4 },
});
