import { StyleService } from '@ui-kitten/components';

export default StyleService.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'color-primary-400',
    width: '100%'
  },
  image: {
    position: 'absolute',
    top: 20
  },
  button: {
    flex: 1,
    marginVertical: 5,
    width: '90%',
    borderColor: 'white',
    backgroundColor: '#598bff'
  },
  buttonGroup: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: '0%',
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'color-primary-100'
  },
  input: {
    width: '90%',
    marginBottom: 5
  }
});
