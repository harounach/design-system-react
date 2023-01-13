import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

import Logo from "../../assets/tekbird-logo.svg";

interface AppbarBrandProps extends BaseProps {}

const AppbarBrand = ({ customclasses }: AppbarBrandProps) => {
  const classes = classNames(customclasses);

  return (
    <a href="#" className={classes}>
      <img src={Logo} alt="Tekbird Logo" />
      <span>TekBird</span>
    </a>
  );
};

export default AppbarBrand;
