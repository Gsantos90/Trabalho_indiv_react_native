import { StyleSheet, Platform } from 'react-native';

const NAV_HEIGHT = 72 + (Platform.OS === 'android' ? 0 : 0);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: NAV_HEIGHT,
    backgroundColor: '#222',
    borderTopWidth: 1,
    borderTopColor: '#333',
    justifyContent: 'center',
    zIndex: 40,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  item: {
    alignItems: 'center',
    width: 64,
  },
  iconPlaceholder: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  iconText: {
    color: '#999',
    fontSize: 16,
  },
  iconImage: {
    width: 28,
    height: 28,
    marginBottom: 6,
    tintColor: '#999',
  },
  iconActive: {
    tintColor: '#ff8000',
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ff8000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  avatarActive: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatarLetter: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    color: '#bbb',
    fontSize: 12,
  },
  activeText: {
    color: '#ff8000',
  },
});

export default styles;
