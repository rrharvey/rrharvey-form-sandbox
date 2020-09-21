import React from "react";
import clsx from "clsx";

export const Button = ({ children, mode = "primary", ...rest }) => (
  <button
    type="button"
    className={clsx("btn", { [`btn-${mode}`]: mode })}
    {...rest}
  >
    {children}
  </button>
);
