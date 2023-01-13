import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { BaseProps } from "../../interfaces/BaseProps";

interface IconProps extends BaseProps {
  type: IconDefinition;
}

const Icon = ({ type }: IconProps) => {
  return <FontAwesomeIcon icon={type} />;
};

export default Icon;
