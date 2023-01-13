import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

// Flex
type Flex = "1" | "auto" | "grow-0" | "shrink-0";
// Align self
type AlignSelf = "auto" | "start" | "end" | "center" | "baseline" | "stretch";
// Order
type Order = "1" | "2" | "none";

interface FlexItemProps extends BaseProps {
  flex?: Flex;
  alignSelf?: AlignSelf;
  order?: Order;
}

const FlexItem = ({
  children,
  flex,
  alignSelf,
  order,
  customclasses,
  ...props
}: FlexItemProps) => {
  const classes = classNames(
    {
      // Flex
      [`flex-${flex}`]: flex,
      // Align self
      [`flex-self-${alignSelf}`]: alignSelf,
      // Order
      [`flex-order-${order}`]: order,
    },
    customclasses
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default FlexItem;
