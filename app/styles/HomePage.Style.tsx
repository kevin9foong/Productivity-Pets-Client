import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    margin: 5
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modal: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  input: {
    flex: 1
  },
  buttongroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    flex: 1
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  view: {
    flexDirection: 'row',
    flex: 1
  }
});
