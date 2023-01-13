import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

interface BoxProps extends BaseProps {}

const Box = ({ children, customclasses, ...props }: BoxProps) => {
  const classes = classNames(customclasses);
  return (
    <div
      className={classes}
      {...props}
      style={{
        backgroundColor: "blue",
        color: "white",
        border: "1px solid white",
      }}
    >
      {children}
    </div>
  );
};

export default Box;
