import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native';

export type TopNavProps = {};

const TopNav: React.FC<TopNavProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>C</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.center}
      >
        <TouchableOpacity><Text style={styles.menu}>Novidades</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menu}>Populares</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menu}>Simulcast</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menu}>Categorias</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menu}>Notícias</Text></TouchableOpacity>
      </ScrollView>

      <View style={styles.right}>
        <TouchableOpacity>
          <Image source={require('../../assets/icon.png')} style={styles.avatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNav;

import styles from './style';
