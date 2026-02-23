import React from "react";
import Input from "../../components/Input";

const ContentFormDate = () => {
  return (
    <form className="box flex">
      <Input label="Início" id="inicio" />
      <Input label="Final" id="fim" />
    </form>
  );
};

export default ContentFormDate;
