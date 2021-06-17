import { StyleService } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'color-primary-400'
  },
  buttonContainer: {
    flex: 3,
    display: 'flex',
    marginVertical: '10%',
    backgroundColor: 'color-primary-400'
  },
  logoContainer: {
    flex: 2,
    marginTop: '10%',
    marginHorizontal: '10%'
  },
  logo: {
    flex: 1,
    resizeMode: 'contain'
  },
  actionButton: {
    marginHorizontal: '10%',
    marginVertical: '10px',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'color-primary-400'
  }
});

export default themedStyles;
