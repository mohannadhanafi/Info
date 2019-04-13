import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class index extends Component {
  state = {}

  render() {
    return (
      <header className="nav">
        <div className="nav__holder nav--sticky">
          <div className="container-fluid container-semi-fluid nav__container">
            <div className="flex-parent">

              <form role="search" method="get" className="nav__search-form">
                <input type="search" className="nav__search-input" id="nav__search-input" placeholder="Type &amp; Hit Enter" />
                <i className="ui-close nav__search-close" id="nav__search-close" />
              </form>

              <div className="nav__header">
                <a href="index.html" className="logo-container">
                  <img className="logo" src="https://i.ibb.co/R7C00gt/logo.png" alt="logo" />
                </a>

                <button type="button" className="nav__icon-toggle" id="nav__icon-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="nav__icon-toggle-bar" />
                  <span className="nav__icon-toggle-bar" />
                  <span className="nav__icon-toggle-bar" />
                </button>
              </div>

              <nav id="navbar-collapse" className="nav__wrap collapse navbar-collapse nav--align-right">
                <ul className="nav__menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/insurance">Insurance</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>


                <div className="nav__phone-mobile d-lg-none">
                  <a href="tel:1-800-995-3959" className="nav__phone-number">1-800-995-3959</a>
                </div>


                <div className="nav__search-mobile d-lg-none">
                  <form role="search" method="get" className="search-form relative">
                    <input type="search" className="search-input" placeholder="Search" />
                    <button type="submit" className="search-button" aria-label="search button"><i className="ui-search search-icon" /></button>
                  </form>
                </div>

              </nav>


              <div className="nav__right d-none d-lg-flex">
                <div className="nav__right-item">
                  <a href="tel:1-800-995-3959" className="nav__phone-number">1-800-995-3959</a>
                </div>
                <div className="nav__right-item nav__search">
                  <a href="#" className="nav__search-trigger" id="nav__search-trigger">
                    <i className="ui-search" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </header>
    );
  }
}