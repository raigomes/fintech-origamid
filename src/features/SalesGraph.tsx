import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useVendas } from "../context/VendasContext";
import { countTotalByDateAndStatus } from "../utils/vendas";

const SalesGraph = () => {
  const { vendas } = useVendas();

  if (!vendas) return null;

  return (
    <div className="box">
      <LineChart
        style={{
          width: "99%",
          height: "400px",
          minWidth: "0px",
        }}
        responsive
        data={countTotalByDateAndStatus(vendas)}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
        <RechartsDevtools />
      </LineChart>
    </div>
  );
};

export default SalesGraph;
