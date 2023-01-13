import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

// TODO: complete Flex

interface FlexProps extends BaseProps {}

const Flex = ({ children, customclasses, ...props }: FlexProps) => {
  const classes = classNames("d-flex", customclasses);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Flex;
