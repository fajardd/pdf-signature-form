import React from "react";

const Input = (props) => {
  const { ...rest } = props;
  return <input className={`border border-slate-400 w-full  `} {...rest} />;
};

export default Input;
