import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

// TODO: complete Column

type Col = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColSM = Col;
type ColMD = Col;
type ColLG = Col;
type ColXL = Col;

interface ColumnProps extends BaseProps {
  col?: Col;
  colSM?: ColSM;
  colMD?: ColMD;
  colLG?: ColLG;
  colXL?: ColXL;
}

const Column = ({
  children,
  col,
  colSM,
  colMD,
  colLG,
  colXL,
  customclasses,
  ...props
}: ColumnProps) => {
  const classes = classNames(
    {
      [`col-${col}`]: col,
      [`col-sm-${colSM}`]: colSM,
      [`col-md-${colMD}`]: colMD,
      [`col-lg-${colLG}`]: colLG,
      [`col-xl-${colXL}`]: colXL,
    },
    customclasses
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Column;
