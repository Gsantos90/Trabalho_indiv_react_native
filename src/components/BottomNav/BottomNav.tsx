import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';

export type BottomNavProps = {
  active?: string;
  username?: string;
};

const BottomNav: React.FC<BottomNavProps> = ({ active = 'home', username = 'Usuário' }) => {
  const items = [
    { key: 'home', label: 'Início' },
    { key: 'lists', label: 'Minhas Listas' },
    { key: 'explore', label: 'Explorar' },
    { key: 'simulcasts', label: 'Simulcasts' },
    { key: 'account', label: 'Conta' },
  ];

  const iconMap: Record<string, { uri: string }> = {
    home: { uri: 'https://img.icons8.com/ios/50/home--v1.png' },
    lists: { uri: 'https://img.icons8.com/ios/50/favorites.png' },
    explore: { uri: 'https://img.icons8.com/ios/50/compass--v1.png' },
    simulcasts: { uri: 'https://img.icons8.com/ios/50/sparkling.png' },
  };

  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={styles.inner}>
        {items.map((it) => (
          <TouchableOpacity key={it.key} style={styles.item} onPress={() => {}}>
            {it.key === 'account' ? (
              <View style={[styles.avatarCircle, it.key === active ? styles.avatarActive : null]}>
                <Text style={styles.avatarLetter}>{(typeof username === 'string' && username.length) ? username[0].toUpperCase() : 'U'}</Text>
              </View>
            ) : (
              <Image
                source={iconMap[it.key]}
                style={[styles.iconImage, it.key === active ? styles.iconActive : null]}
                resizeMode="contain"
              />
            )}
            <Text style={[styles.label, it.key === active ? styles.activeText : null]}>{it.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomNav;

const NAV_HEIGHT = 72 + (Platform.OS === 'android' ? 0 : 0);

import styles from './style';
