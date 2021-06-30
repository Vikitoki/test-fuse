import {
  AccomodationActions,
  IAccomodationItem,
} from "../../types/accommodation";
import {
  FETCH_ACCOMODATION_LIST_FAILURE,
  FETCH_ACCOMODATION_LIST_REQUEST,
  FETCH_ACCOMODATION_LIST_SUCCESS,
} from "./action-variables";

export const fetchAccomodationListRequest = (): AccomodationActions => ({
  type: FETCH_ACCOMODATION_LIST_REQUEST,
});

export const fetchAccomodationListFailure = (
  payload: string
): AccomodationActions => ({
  type: FETCH_ACCOMODATION_LIST_FAILURE,
  payload,
});

export const fetchAccomodationListSuccess = (
  payload: IAccomodationItem[]
): AccomodationActions => ({
  type: FETCH_ACCOMODATION_LIST_SUCCESS,
  payload,
});
