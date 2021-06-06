import axios from 'axios';

const resourceServerAuthURL = 'http://localhost:3000/auth/google';

export const authenticateGoogleAccessToken = (accessToken: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
      //   'Access-Control-Allow-Origin': '*'
    }
  };
  return axios.get(resourceServerAuthURL, config);
};
