import { SET_USER_SESSION } from "../../constants/redux-constants/users";

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
