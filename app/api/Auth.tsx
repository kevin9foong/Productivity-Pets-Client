import axios from 'axios';

const resourceServerAuthURL = 'https://orbital-pets.herokuapp.com/auth/google';

export const authenticateGoogleAccessToken = (accessToken: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  return axios.get(resourceServerAuthURL, config);
};
