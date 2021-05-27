import { StyleSheet } from 'react-native';
import colors from './colors.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.EVA_COLOR_PRIMARY_900,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: colors.EVA_COLOR_BASIC_200,
    marginBottom: 40
  },
  inputText: {
    height: 50,
    color: colors.EVA_COLOR_BASIC_1100
  },
  loginBtn: {
    width: '80%',
    backgroundColor: colors.EVA_COLOR_BASIC_200,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  }
});
