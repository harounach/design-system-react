import React from "react";
import classNames from "classnames";
import { BaseProps } from "../../interfaces/BaseProps";

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  center?: boolean;
  full?: boolean;
  search?: boolean;
  label?: string;
}

const Button = ({
  children,
  label,
  primary,
  secondary,
  center,
  full,
  search,
  customclasses,
  ...props
}: ButtonProps) => {
  const classes = classNames(
    "btn",
    {
      ["btn--primary"]: primary,
      ["btn--secondary"]: secondary,
      ["btn--center"]: center,
      ["btn--full"]: full,
      ["btn--search"]: search,
    },
    customclasses
  );
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
