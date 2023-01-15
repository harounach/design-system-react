import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

interface AppbarItemsProps extends BaseProps {}

const AppbarItems = ({ children, customclasses }: AppbarItemsProps) => {
  const classes = classNames("nav__items", customclasses);
  return <ul className={classes}>{children}</ul>;
};

export default AppbarItems;
