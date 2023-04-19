import React from "react";
import moment from "moment";

const Footer = () => {
  return (
    <>
      <div className="row footerContainer">
        <div className="col text-center mt-4">
          <p className="footer-body">
            © All Rights Reserved. Developed by: Purwa Wiadnyana&ensp;
            {moment().format("YYYY")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
