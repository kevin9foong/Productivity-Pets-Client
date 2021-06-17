import { IAction } from './ActionType';

export const login = (
  userId: string,
  userName: string,
  userAvatar: string,
  userToken: string
): IAction => ({
  type: 'LOGIN',
  payload: {
    userId,
    userName,
    userAvatar,
    userToken
  }
});

export const logout = (): IAction => ({
  type: 'LOGOUT'
});

export const retrieveToken = (userToken: string | null): IAction => ({
  type: 'RETRIEVE_TOKEN',
  payload: {
    userToken
  }
});
