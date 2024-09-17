import React from "react";

const Button = (props) => {
  const { children, ...rest } = props;
  return (
    <button className={`w-full text-white bg-blue-500`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
