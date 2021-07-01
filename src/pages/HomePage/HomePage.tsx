import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HomeItem } from "../../components/HomeItem/HomeItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { filterBy } from "../../services/helpers/filterBy";
import { getAccomodationItems } from "../../services/rest/accommodationActions";
import { IAccomodationItem } from "../../types/accommodation";

import "./HomePage.scss";

export const HomePage: FC = () => {
  const { loading, error, accommodationList } = useTypedSelector(
    (state) => state.accomodation
  );
  const dispatch = useDispatch();
  const [searchingValue, setSearchingValue] = useState<string>("");
  const [visibleAccommodationListsItems, setVisibleAccommodationListsItems] =
    useState<IAccomodationItem[]>([]);

  useEffect(() => {
    if (accommodationList.length === 0) {
      dispatch(getAccomodationItems());
    }
  }, [accommodationList.length, dispatch]);

  useEffect(() => {
    if (searchingValue.trim() === "" || searchingValue.length <= 2) {
      setVisibleAccommodationListsItems([]);
    } else {
      setVisibleAccommodationListsItems(
        filterBy(accommodationList, searchingValue)
      );
    }
  }, [searchingValue, accommodationList]);

  const searchingInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchingValue(event.target.value);
  };

  return (
    <section className="home-page">
      <div className="home-page__container container">
        <h1 className="home-page__title">Our Latest Developments</h1>
        {loading ? (
          <span className="status-text">Загрузка...</span>
        ) : error ? (
          <span className="status-text">{error}</span>
        ) : (
          <>
            <div className="home-page__form">
              <div className="form">
                <div className="form__items">
                  <div className="form__item">
                    <label htmlFor="searching" className="form__label">
                      Filter
                    </label>
                    <input
                      type="text"
                      id="searching"
                      name="searching"
                      className="form__input"
                      value={searchingValue}
                      onChange={searchingInputHandler}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-page__content">
              {visibleAccommodationListsItems.length !== 0 ? (
                <ul className="home-page__list">
                  {visibleAccommodationListsItems.map((item) => {
                    return (
                      <li key={item.id}>
                        <HomeItem itemInfo={item} />
                      </li>
                    );
                  })}
                </ul>
              ) : accommodationList.length !== 0 ? (
                <ul className="home-page__list">
                  {accommodationList.map((item) => {
                    return (
                      <li key={item.id}>
                        <HomeItem itemInfo={item} />
                      </li>
                    );
                  })}
                </ul>
              ) : null}
              <div className="home-page__btns">
                <Link to="/" className="btn btn_white-outline">
                  See more
                  <svg className="icon icon_f">
                    <use xlinkHref="#blackArrow"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
