import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

interface ContainerProps extends BaseProps {}

const Container = ({ children, customclasses }: ContainerProps) => {
  const classes = classNames("container", customclasses);

  return <div className={classes}>{children}</div>;
};

export default Container;
