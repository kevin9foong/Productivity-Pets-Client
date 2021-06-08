import { IAction } from '../actions/ActionType';

const INITIAL_AUTH_STATE = {
  userToken: null,
  userId: null,
  userName: null,
  userAvatarUrl: null
};

export default (prevState = INITIAL_AUTH_STATE, action: IAction) => {
  switch (action.type) {
    case 'RETRIEVE_TOKEN':
      return {
        ...prevState,
        userToken: action.payload.userToken
      };
    case 'LOGIN':
      return {
        ...prevState,
        userToken: action.payload.userToken,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userAvatar: action.payload.userAvatar
      };
    case 'LOGOUT':
      return {
        ...prevState,
        userToken: null,
        userId: null,
        userName: null,
        userAvatar: null
      };
    default:
      return prevState;
  }
};
