import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { HomeItem } from "../../components/HomeItem/HomeItem";

import "./HomePage.scss";

export const HomePage: FC = () => {
  return (
    <section className="home-page">
      <div className="home-page__container container">
        <h1 className="home-page__title">Our Latest Developments</h1>
        <div className="home-page__form">
          <div className="form">
            <div className="form__items">
              <div className="form__item">
                <label className="form__label">Filter</label>
                <input type="text" className="form__input"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page__content">
          <ul className="home-page__list">
            <li>
              <HomeItem />
            </li>
            <li>
              <HomeItem />
            </li>
            <li>
              <HomeItem />
            </li>
          </ul>
          <div className="home-page__btns">
            <Link to="/" className="btn btn_white-outline">
              See more
              <svg className="icon icon_f">
                <use xlinkHref="#blackArrow"></use>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
