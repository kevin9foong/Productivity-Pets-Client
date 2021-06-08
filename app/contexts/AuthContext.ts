import { createContext } from 'react';

const AuthContext = createContext({
  login: () => {},
  logout: () => {}
});

export default AuthContext;
