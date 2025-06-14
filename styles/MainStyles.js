import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 24,
  },
  titleRow: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 0,
    marginBottom: 16,
  },
  mainTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 0,
    paddingHorizontal: 0,
    textAlign: 'left',
  },
  screenTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  screenText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#222',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
