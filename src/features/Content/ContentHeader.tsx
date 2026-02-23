import React from "react";
import ContentFormDate from "./ContentFormDate";
import ContentDateFilter from "./ContentDateFilter";

const ContentHeader = () => {
  return (
    <header className="mb">
      <div className="daterange mb">
        <ContentFormDate />
        <h1 className="box bg-3">Resumo</h1>
      </div>
      <ContentDateFilter />
    </header>
  );
};

export default ContentHeader;
