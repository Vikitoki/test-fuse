import { Dispatch } from "react";
import {
  fetchAccomodationListFailure,
  fetchAccomodationListRequest,
  fetchAccomodationListSuccess,
} from "../../store/accommodation/action-creators";
import { AccomodationActions, IAccomodationItem } from "../../types/accommodation";

export const getAccomodationItems = () => {
  return async (dispatch: Dispatch<AccomodationActions>) => {
    try {
      dispatch(fetchAccomodationListRequest());
      const response = await fetch(
        "https://603e38c548171b0017b2ecf7.mockapi.io/homes"
      );

      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, повторите попытку через 5 секунд"
        );
      }

      const data: IAccomodationItem[] = await response.json();
      dispatch(fetchAccomodationListSuccess(data));
    } catch (error) {
      dispatch(fetchAccomodationListFailure(error.message));
    }
  };
};
