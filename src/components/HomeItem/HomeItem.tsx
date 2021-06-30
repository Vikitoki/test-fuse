import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import ExampleImg from "../../images/example.jpg";

import "./HomeItem.scss";

export const HomeItem: FC = () => {
  return (
    <div className="home-item">
      <Link to="/1" className="home-item__top">
        <div className="home-item__img">
          <img src={ExampleImg} alt="" />
        </div>
        <div className="home-item__label home-item__label_dark-green">
          Independent living
        </div>
      </Link>
      <div className="home-item__content content-home-item">
        <div className="content-home-item__top">
          <Link to="/1" className="content-home-item__title">
            Brunlees Court
          </Link>
          <address className="content-home-item__address">
            19-23 Cambridge Road, Southport
          </address>
        </div>
        <div className="content-home-item__bottom">
          <div className="content-home-item__price">
            New Properties for Sale from <span>£214,999</span>
          </div>
          <div className="content-home-item__status">
            Shared Ownership Available
          </div>
        </div>
      </div>
    </div>
  );
};
