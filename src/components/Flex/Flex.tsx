import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

type Display = "flex" | "inline-flex";
type Direction = "row" | "row-reverse" | "column" | "column-reverse";
type Wrap = "wrap" | "nowrap" | "wrap-reverse";
type Justify = "start" | "end" | "center" | "between" | "around";
type AlignItems = "start" | "end" | "center" | "baseline" | "stretch";
type AlignContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "stretch";

interface FlexProps extends BaseProps {
  display: Display;
  direction?: Direction;
  wrap?: Wrap;
  justify?: Justify;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
}

const Flex = ({
  children,
  display,
  direction,
  wrap,
  justify,
  alignItems,
  alignContent,
  customclasses,
  ...props
}: FlexProps) => {
  const classes = classNames(
    {
      // display
      [`d-${display}`]: display,
      // Flex direction
      [`flex-${direction}`]: direction,
      // Flex wrap
      [`flex-${wrap}`]: wrap,
      // Justify content
      [`flex-justify-${justify}`]: justify,
      // Align items
      [`flex-items-${alignItems}`]: alignItems,
      // Align content
      [`flex-content-${alignContent}`]: alignContent,
    },
    customclasses
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Flex;
