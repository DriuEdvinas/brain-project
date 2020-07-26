import React from "react";
import Tilt from "react-tilt";
import logo from "./LogoW.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt"
        options={{ max: 45 }}
        style={{ height: 200, width: 200 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: "2px" }} alt="logo" src={logo} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
