import React from "react";

const CardEducation = ({ title, subtitle, text }) => {
  return (
    <div className="card-education col-12 mb-4">
      <div className="card-body-education">
        <h3 className="card-title-education mb-1">{title}</h3>
        <h5 className="card-subtitle-education mb-3">{subtitle}</h5>
        <p className="card-text-education">{text}</p>
      </div>
    </div>
  );
};

export default CardEducation;
