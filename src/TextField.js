import React from "react";

export const TextField = ({ register, label, name, ...rest }) => {
  return (
    <div className="form-group row">
      <label className="col-4 col-form-label">{label}</label>
      <div className="col-8">
        <input
          type="text"
          className="form-control"
          name={name}
          ref={register}
          {...rest}
        />
      </div>
    </div>
  );
};
