import { ADD_LOGIN_USER } from "../actions/userActions";

const initialUserState = {
  loginUsersList: [],
};

const userReducer = (state = initialUserState, actions) => {
  switch (actions.type) {
    case ADD_LOGIN_USER:
      return {
        ...state,
        loginUsersList: [...state.loginUsersList, actions.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
