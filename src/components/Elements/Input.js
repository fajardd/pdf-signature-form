import React from "react";

const Input = (props) => {
  const { borderInput, ...rest } = props;
  return (
    <input
      className={`border border-${borderInput}-700 focus:outline-none w-full  `}
      {...rest}
    />
  );
};

export default Input;
