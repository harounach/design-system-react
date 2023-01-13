import React from "react";

import AppbarBrand from "./AppbarBrand";
import SearchForm from "../SearchForm/SearchForm";
import MenuButton from "../Button/MenuButton";

const Appbar = () => {
  return (
    <header className="appbar mb-15">
      <div className="container">
        <div className="appbar__content">
          <AppbarBrand customclasses="appbar__brand" />
          <MenuButton customclasses="appbar__menu" />
          <nav className="appbar__nav">
            <ul className="nav__items">
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Link 1
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Link 2
                </a>
              </li>
              {/* Dropdown */}
              <li className="nav__item dropdown">
                <a className="nav__link dropdown__toggle" href="#">
                  Link 3 <i className="fa-solid fa-caret-down"></i>
                </a>
                <ul className="dropdown__menu">
                  <li className="nav__item">
                    <a className="nav__link" href="#">
                      Sublink 1
                    </a>
                  </li>
                  {/* Dropdown */}
                  <li className="nav__item dropdown">
                    <a className="nav__link dropdown__toggle" href="#">
                      Sublink 2 <i className="fa-solid fa-caret-down"></i>
                    </a>
                    <ul className="dropdown__menu">
                      {/* Dropdown */}
                      <li className="nav__item dropdown">
                        <a href="#" className="nav__link dropdown__toggle">
                          Sub Sublink 1{" "}
                          <i className="fa-solid fa-caret-down"></i>
                        </a>
                        <ul className="dropdown__menu">
                          <li className="nav__item">
                            <a href="#" className="nav__link">
                              Sub sub sublink 1
                            </a>
                          </li>
                          <li className="nav__item">
                            <a href="#" className="nav__link">
                              Sub sub sublink 2
                            </a>
                          </li>
                          <li className="nav__item">
                            <a href="#" className="nav__link">
                              Sub sub sublink 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav__item">
                        <a href="#" className="nav__link">
                          Sub Sublink 2
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="#" className="nav__link">
                          Sub Sublink 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item">
                    <a className="nav__link" href="#">
                      Sublink 3
                    </a>
                  </li>
                  <li className="nav__item">
                    <a className="nav__link" href="#">
                      Sublink 4
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Link 4
                </a>
              </li>
            </ul>

            {/* Search form */}
            <SearchForm />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Appbar;
