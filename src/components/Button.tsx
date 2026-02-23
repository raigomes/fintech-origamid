import React from "react";

type IButton = React.HTMLAttributes<HTMLButtonElement>;

const Button = (props: IButton) => {
  return (
    <button
      style={{
        padding: "var(--gap) var(--gap-s)",
        backgroundColor: "var(--color-3)",
        border: "none",
        borderRadius: "var(--gap)",
        color: "var(--color-2)",
        fontWeight: 600,
        textTransform: "capitalize",
      }}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
