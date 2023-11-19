import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ categories, series }) => {
  return (
    <>
      <ReactApexChart
        options={{
          chart: {
            id: "basic-bar",
            type: "area",
            zoom: { enabled: false },
            sparkline: { enabled: true },
            toolbar: { show: true, tools: { download: true } },
          },
          colors: ["#ce1c34", "#6ed3cf"],
          xaxis: {
            type: "datetime",
            categories: categories,
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
        }}
        series={[
          {
            name: "series1",
            data: series,
          },
        ]}
        type="area"
        height={200}
      />
    </>
  );
};

export default Chart;
