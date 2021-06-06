import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  check: {
    marginVertical: 5
  },
  date: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
