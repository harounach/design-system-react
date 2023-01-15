import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

import Container from "../Container/Container";

interface AppbarProps extends BaseProps {}

const Appbar = ({ children, customclasses }: AppbarProps) => {
  const classes = classNames("appbar", customclasses);

  return (
    <header className={classes}>
      <Container>
        <div className="appbar__content">{children}</div>
      </Container>
    </header>
  );
};

export default Appbar;
