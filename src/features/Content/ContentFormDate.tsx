import React from "react";

const ContentFormDate = () => {
  return (
    <form className="box flex">
      <div>
        <label htmlFor="Início">Início</label>
        <input id="Início" name="Início" type="date" value="2026-02-01" />
      </div>
      <div>
        <label htmlFor="Final">Final</label>
        <input id="Final" name="Final" type="date" value="2026-02-28" />
      </div>
    </form>
  );
};

export default ContentFormDate;
