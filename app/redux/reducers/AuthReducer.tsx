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
        userToken: action.payload.userToken
      };
    case 'LOGOUT':
      return {
        ...prevState,
        userToken: null
      };
    default:
      return prevState;
  }
};
