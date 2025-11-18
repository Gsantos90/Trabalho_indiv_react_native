import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 56 + (Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0),
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'space-between',
    zIndex: 30,
  },
  left: { width: 60 },
  center: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8 },
  right: { width: 60, alignItems: 'flex-end' },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff8000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  menu: { color: '#fff', marginHorizontal: 12, fontSize: 14 },
  avatar: { width: 36, height: 36, borderRadius: 18 },
});

export default styles;
