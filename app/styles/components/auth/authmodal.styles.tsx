import { StyleService } from '@ui-kitten/components';

export default StyleService.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '60%',
    backgroundColor: 'color-primary-300',
    marginTop: 'auto',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },
  userPasswordContainer: {
    flex: 3,
    marginTop: '20%',
    marginHorizontal: '10%',
    backgroundColor: 'transparent'
  },
  input: {
    width: '100%',
    marginBottom: 5,
    backgroundColor: 'color-primary-400',
    color: '#FFF'
  },
  button: {
    width: '100%',
    marginBottom: 5
  },
  oAuthContainer: {
    flex: 2,
    marginBottom: '20%',
    marginHorizontal: '10%',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});
