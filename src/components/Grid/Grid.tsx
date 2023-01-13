import React from "react";
import classNames from "classnames";

import { BaseProps } from "../../interfaces/BaseProps";

type Gap = "0" | "05" | "1" | "15" | "2" | "3";
type GapSM = Gap;
type GapMD = Gap;
type GapLG = Gap;
type GapXL = Gap;

interface GridProps extends BaseProps {
  gap?: Gap;
  gapSM?: GapSM;
  gapMD?: GapMD;
  gapLG?: GapLG;
  gapXL?: GapXL;
}

const Grid = ({
  children,
  gap,
  gapSM,
  gapMD,
  gapLG,
  gapXL,
  customclasses,
  ...props
}: GridProps) => {
  const classes = classNames(
    "grid",
    {
      [`gap-${gap}`]: gap,
      [`gap-sm-${gapSM}`]: gapSM,
      [`gap-md-${gapMD}`]: gapMD,
      [`gap-lg-${gapLG}`]: gapLG,
      [`gap-xl-${gapXL}`]: gapXL,
    },
    customclasses
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Grid;
