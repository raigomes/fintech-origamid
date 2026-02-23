import React from "react";

interface IBox {
  title: string;
  value: number;
}

const Box = ({ title, value }: IBox) => {
  return (
    <div className="box">
      <h2>{title}</h2>
      <span>
        {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </span>
    </div>
  );
};

export default Box;
