import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

interface AppbarItemProps extends BaseProps {
  dropdown?: boolean;
}

const AppbarItem = ({ children, dropdown, customclasses }: AppbarItemProps) => {
  const classes = classNames(
    "nav__item",
    {
      ["dropdown"]: dropdown,
    },
    customclasses
  );
  return <li className={classes}>{children}</li>;
};

export default AppbarItem;
