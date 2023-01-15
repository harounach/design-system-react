import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

interface AppbarNavProps extends BaseProps {}

const AppbarNav = ({ children, customclasses }: AppbarNavProps) => {
  const classes = classNames("appbar__nav", customclasses);
  return <nav className={classes}>{children}</nav>;
};

export default AppbarNav;
