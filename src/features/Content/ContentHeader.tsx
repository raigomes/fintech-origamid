import React from "react";
import ContentFormDate from "./ContentFormDate";
import ContentDateFilter from "./ContentDateFilter";
import { useVendas } from "../../context/VendasContext";

const ContentHeader = () => {
  const { page } = useVendas();

  return (
    <header className="mb">
      <div className="daterange mb">
        <ContentFormDate />
        <h1 className="box bg-3">{page}</h1>
      </div>
      <ContentDateFilter />
    </header>
  );
};

export default ContentHeader;
