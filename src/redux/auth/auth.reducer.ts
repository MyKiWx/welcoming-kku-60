import {
  REGISTER_STATUS,
  LOGIN_STATUS,
  LOGOUT_STATUS,
} from "@/interface/auth.type";
import { User } from "firebase/auth";

interface InitialStateProps {
  user: User | null;
  error: any;
  loading: boolean | null;
}

const initialState: InitialStateProps = {
  user: null,
  error: null,
  loading: false,
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    // ANCHOR : Registers status
    case REGISTER_STATUS.REQUEST:
    case LOGIN_STATUS.REQUEST:
    case LOGOUT_STATUS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_STATUS.SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case LOGIN_STATUS.SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case LOGOUT_STATUS.SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    case REGISTER_STATUS.FAILURE:
    case LOGIN_STATUS.FAILURE:
    case LOGOUT_STATUS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
