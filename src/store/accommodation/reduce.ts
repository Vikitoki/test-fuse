import {
  AccomodationActions,
  AccomodationState,
} from "../../types/accommodation";
import {
  FETCH_ACCOMODATION_LIST_FAILURE,
  FETCH_ACCOMODATION_LIST_REQUEST,
  FETCH_ACCOMODATION_LIST_SUCCESS,
} from "./action-variables";

const initialState: AccomodationState = {
  accommodationList: [],
  loading: false,
  error: "",
};

export const accomodationReducer = (
  state = initialState,
  action: AccomodationActions
): AccomodationState => {
  switch (action.type) {
    case FETCH_ACCOMODATION_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ACCOMODATION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        accommodationList: action.payload,
      };
    case FETCH_ACCOMODATION_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
