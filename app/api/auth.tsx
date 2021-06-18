import axios from 'axios';

// const resourceServerAuthURL = 'https://orbital-pets.herokuapp.com/auth/google';
const resourceServerAuthURL = 'http://localhost:3000/auth/google';

export const authenticateGoogleAccessToken = (accessToken: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  return axios.get(resourceServerAuthURL, config);
};
