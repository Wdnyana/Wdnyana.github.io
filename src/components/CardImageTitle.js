import React from "react";

const CardImageTitle = ({ title, imageUrl }) => {
  return (
    <div className="card col-12 col-md-3 mx-auto mx-md-3 mb-3">
      <img src={imageUrl} className="card-img" alt={`${title} card`} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default CardImageTitle;
