import {
  SET_USER_SESSION,
  USER_LOGOUT,
} from "../../constants/redux-constants/users";

const initialState = {
  userSession: {},
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SESSION:
      return { userSession: action.payload };
    case USER_LOGOUT:
      return { userSession: {} };
    default:
      return state;
  }
};

export default userReducer;
