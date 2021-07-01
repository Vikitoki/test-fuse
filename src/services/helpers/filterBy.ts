import { IAccomodationItem } from "../../types/accommodation";

export const filterBy = (data: IAccomodationItem[], value: string) => {
  return data.filter((item) => item.title.toLowerCase().includes(value));
};
