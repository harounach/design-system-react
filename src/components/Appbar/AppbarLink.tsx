import React from "react";
import classNames from "classnames";
import Icon from "../Button/Icon";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { BaseProps } from "../../interfaces/BaseProps";

interface AppbarLinkProps extends BaseProps {
  label?: string;
  url?: string;
  toggle?: boolean;
}

const AppbarLink = ({ label, url, toggle, customclasses }: AppbarLinkProps) => {
  const classes = classNames(
    "nav__link",
    {
      ["dropdown__toggle"]: toggle,
    },
    customclasses
  );

  const icon = <Icon type={faCaretDown} />;

  return (
    <a className={classes} href={url}>
      {label} {toggle && icon}
    </a>
  );
};

export default AppbarLink;
