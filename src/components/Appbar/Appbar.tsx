import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

interface AppbarProps extends BaseProps {}

const Appbar = ({ children, customclasses }: AppbarProps) => {
  const classes = classNames("appbar", customclasses);

  return (
    <header className={classes}>
      <div className="container">
        <div className="appbar__content">{children}</div>
      </div>
    </header>
  );
};

export default Appbar;
