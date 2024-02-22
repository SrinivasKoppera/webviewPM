export const ADD_LOGIN_USER = "ADD_LOGIN_USER";

export const addLoginUserDetailsAction = (userDetails) => {
  return {
    type: ADD_LOGIN_USER,
    payload: userDetails,
  };
};
