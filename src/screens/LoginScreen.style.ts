import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
    justifyContent: 'center',
  },
  logo: {
    color: '#ff8000',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 32,
  },
  label: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  forgot: {
    color: '#fff',
    marginTop: 8,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  loginButton: {
    marginBottom: 24,
  },
  back: {
    color: '#ff8000',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },
});

export default styles;
