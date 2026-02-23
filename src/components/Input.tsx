import React from "react";

type IInput = React.ComponentProps<"input"> & {
  label: string;
};

const Input = ({ label, id, value, onChange }: IInput) => {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          marginBottom: "var(--gap-s)",
          fontWeight: 600,
          fontSize: "1rem",
          color: "var(--color-2)",
          padding: "var(--gap-s) .75rem",
          backgroundColor: "var(--color-4)",
          borderRadius: "var(--gap)",
        }}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="date"
        value={value}
        onChange={onChange}
        style={{
          border: "none",
          fontFamily: "monospace",
          fontSize: "1rem",
          color: "var(--color-2)",
          padding: "var(--gap-s) .75rem",
          backgroundColor: "var(--color-4)",
          borderRadius: "var(--gap)",
        }}
      />
    </div>
  );
};

export default Input;
