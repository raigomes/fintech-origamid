import React from "react";
import Button from "../../components/Button";
import { useVendas } from "../../context/VendasContext";
import { getFirstAndLastDayOfMonth, getLastFourMonths } from "../../utils/date";

const ContentDateFilter = () => {
  const { setInicio, setFim } = useVendas();
  const today = new Date();
  const months = getLastFourMonths(today);

  function handleClick(date: Date) {
    const { firstDay, lastDay } = getFirstAndLastDayOfMonth(date);

    setInicio(firstDay);
    setFim(lastDay);
  }

  return (
    <div className="flex">
      {months.map(({ fullMonth, date }) => (
        <Button key={fullMonth} onClick={() => handleClick(date)}>
          {fullMonth}
        </Button>
      ))}
    </div>
  );
};

export default ContentDateFilter;
