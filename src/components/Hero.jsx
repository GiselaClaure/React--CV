import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="card">
      <h2>
        {hero.fullName}
      </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.dateOfBirth}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>
          giselaclaure@gmail.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾<a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Hero;