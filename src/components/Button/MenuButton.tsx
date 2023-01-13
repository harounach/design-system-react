import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

interface MenuButtonProps extends BaseProps {
  onClick?: () => void;
  label?: string;
}

const MenuButton = ({
  children,
  label,
  customclasses,
  ...props
}: MenuButtonProps) => {
  const classes = classNames("menu-btn", {}, customclasses);
  return (
    <button className={classes} {...props}>
      <span className="menu-btn__tb"></span>
      <span className="menu-btn__mb"></span>
      <span className="menu-btn__bb"></span>
    </button>
  );
};

export default MenuButton;
