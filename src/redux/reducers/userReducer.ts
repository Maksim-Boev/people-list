import { UserAction, UserActionTypes, UserState } from "../../types/users";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        users: [],
        loading: true,
        error: null,
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: null,
      };
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;