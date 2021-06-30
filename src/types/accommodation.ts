import {
  FETCH_ACCOMODATION_LIST_FAILURE,
  FETCH_ACCOMODATION_LIST_REQUEST,
  FETCH_ACCOMODATION_LIST_SUCCESS,
} from "../store/accommodation/action-variables";

export interface IAccomodationItem {
  id: string;
  title: string;
  address: string;
  type: string;
  price: string;
}

export interface AccomodationState {
  accommodationList: IAccomodationItem[];
  loading: boolean;
  error: string;
}

interface FetchAccomodationListFailureAction {
  type: typeof FETCH_ACCOMODATION_LIST_FAILURE;
  payload: string;
}

interface FetchAccomodationListSuccessAction {
  type: typeof FETCH_ACCOMODATION_LIST_SUCCESS;
  payload: IAccomodationItem[];
}

interface FetchAccomodationListRequestAction {
  type: typeof FETCH_ACCOMODATION_LIST_REQUEST;
}

export type AccomodationActions =
  | FetchAccomodationListFailureAction
  | FetchAccomodationListSuccessAction
  | FetchAccomodationListRequestAction;
