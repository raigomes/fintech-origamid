import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
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
      <ResponsiveContainer width="99%" height={400}>
        <LineChart data={countTotalByDateAndStatus(vendas)}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#8884d8"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#FBCB21"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
          <RechartsDevtools />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesGraph;
