import React from "react";
import clsx from "clsx";

export const Row = ({ children, className, ...rest }) => (
  <div className={clsx("row", className)} {...rest}>
    {children}
  </div>
);

export const Col = ({ children, className, span, ...rest }) => (
  <div className={clsx(span ? `col-${span}` : "col", className)} {...rest}>
    {children}
  </div>
);
