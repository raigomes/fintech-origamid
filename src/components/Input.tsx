import React from "react";

type IInput = {
  label: string;
  id: string;
};

const Input = ({ label, id }: IInput) => {
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
        value="2026-02-01"
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
