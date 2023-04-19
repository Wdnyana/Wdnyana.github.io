import React from "react";

const CardCertification = ({ cardTitle, imgUrl }) => {
  return (
    <div className="cardCertif col-12 col-md-6 mx-auto mx-md-0 mb-3">
      <div className="img-certif">
        <img
          src={imgUrl}
          className="card-certif-img"
          alt={`${cardTitle} card`}
        />
      </div>
      <div className="card-certif-body">
        <h3 className="card-certif-title">{cardTitle}</h3>
      </div>
    </div>
  );
};

export default CardCertification;
