import React from 'react';
import { Link } from 'react-router-dom';
import landing from '../assets/images/landing.svg';
import '../assets/scss/home.scss';

export const Stackblitz = () => {
  return (
    <div className="home">
      <img className="homeImg" src={landing} alt="home logo" />
      <div className="hometext">
        <h1>Hello ImageBlizz!</h1>
        <Link to="players">Click here to view Players</Link>
      </div>
    </div>
  );
};
