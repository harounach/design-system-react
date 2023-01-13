import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

interface LinkButtonProps extends BaseProps {
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  center?: boolean;
  full?: boolean;
  search?: boolean;
  label?: string;
  url?: string;
}

const LinkButton = ({
  children,
  label,
  primary,
  secondary,
  center,
  full,
  search,
  url,
  customclasses,
  ...props
}: LinkButtonProps) => {
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
    <a href={url} className={classes} {...props}>
      {children}
    </a>
  );
};

export default LinkButton;
