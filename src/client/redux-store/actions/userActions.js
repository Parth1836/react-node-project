import {
  SET_USER_SESSION,
  USER_LOGOUT,
} from "../../constants/redux-constants/users";

export const setUserSession = (payload) => {
  return {
    type: SET_USER_SESSION,
    payload: {
      userId: payload.userId,
      userName: payload.userName,
      userEmail: payload.userEmail,
      userRole: payload.userRole,
    },
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
    payload: {},
  };
};
