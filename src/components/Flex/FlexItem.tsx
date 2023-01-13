import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

// TODO: complete Flex
type Display = "flex" | "inline-flex";
type Direction = "row" | "row-reverse" | "column" | "column-reverse";
type Wrap = "wrap" | "nowrap" | "wrap-reverse";
type Justify = "start" | "end" | "center" | "between" | "around";
type AlignItems = "start" | "end" | "center" | "baseline" | "stretch";

interface FlexItemProps extends BaseProps {
  display: Display;
  direction?: Direction;
  wrap?: Wrap;
  justify?: Justify;
  alignItems?: AlignItems;
}

const FlexItem = ({
  children,
  display,
  direction,
  wrap,
  justify,
  alignItems,
  customclasses,
  ...props
}: FlexItemProps) => {
  const classes = classNames("d-flex", customclasses);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default FlexItem;
