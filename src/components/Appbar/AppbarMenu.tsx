import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

interface AppbarMenuProps extends BaseProps {}

const AppbarMenu = ({ children, customclasses }: AppbarMenuProps) => {
  const classes = classNames("dropdown__menu", customclasses);
  return <ul className={classes}>{children}</ul>;
};

export default AppbarMenu;
