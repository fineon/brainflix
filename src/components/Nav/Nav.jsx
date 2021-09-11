import React from 'react';
import './Nav.scss';
import Logo from './../../assets/Logo/logo.svg';
import searchIcon from './../../assets/Icons/SVG/Icon-search.svg';
import uploadIcon from './../../assets/Icons/SVG/Icon-upload.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    //renders the global nav bar, with links to route to the corresponding content, controlled from the App component
    <nav className="nav">

      <Link to="/" className="nav__link">
        <img className="nav__logo" src={Logo} alt="logo" />
      </Link>

      <div className="nav__right">
        <div className="nav__input">
          <img
            className="nav__input__img"
            src={searchIcon}
            alt="search icon" />
          <p className="nav__input__text">Search</p>
        </div>

        <div className="nav__button-userimg">
          <div className="nav__button">
            <img
              className="nav__button-icon"
              src={uploadIcon}
              alt="plus sign" />
            <Link to="/upload"
              className="nav__link">
              <p className="nav__button-text">upload</p>
            </Link>
          </div>
          <div className="nav__userimg"></div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;