import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

// TODO: complete TextField component

interface TextFieldProps extends BaseProps {}

const TextField = ({ children, customclasses, ...props }: TextFieldProps) => {
  const classes = classNames("btn", customclasses);
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default TextField;
