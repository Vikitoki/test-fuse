import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import ExampleImg from "../../images/example.jpg";
import { IAccomodationItem } from "../../types/accommodation";

import "./HomeItem.scss";

interface HomeItemProps {
  itemInfo: IAccomodationItem;
}

export const HomeItem: FC<HomeItemProps> = ({ itemInfo }) => {
  const { address, id, price, title, type } = itemInfo;

  return (
    <div className="home-item">
      <Link to={`/${id}`} className="home-item__top">
        <div className="home-item__img">
          <img src={ExampleImg} alt="" />
        </div>
        <div
          className={`home-item__label ${
            type === "IndependentLiving"
              ? "home-item__label_dark-green"
              : "home-item__label_orange"
          }`}
        >
          {type}
        </div>
      </Link>
      <div className="home-item__content content-home-item">
        <div className="content-home-item__top">
          <Link to={`/${id}`} className="content-home-item__title">
            {title}
          </Link>
          <address className="content-home-item__address">{address}</address>
        </div>
        <div className="content-home-item__bottom">
          <div className="content-home-item__price">
            New Properties for Sale from <span>£{price}</span>
          </div>
          <div className="content-home-item__status">
            Shared Ownership Available
          </div>
        </div>
      </div>
    </div>
  );
};
