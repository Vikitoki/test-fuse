import React from "react";
import { FC } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./AccomodationDetailsPage.scss";

interface PostParams {
  id: string;
}

export const AccomodationDetailsPage: FC<RouteComponentProps> = () => {
  const { id } = useParams<PostParams>();

  return (
    <div className="accomodation-details-page">
      <div className="accomodation-details-page__text">
        Информация по жилью с id {id}
        <Link to="/">Вернуться на главную</Link>
      </div>
    </div>
  );
};
