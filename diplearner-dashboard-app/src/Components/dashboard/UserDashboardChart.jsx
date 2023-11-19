import React from "react";
import Chart from "../../Utils/Chart";

const UserDashboardChart = () => {
  return (
    <div className="w-full h-auto py-2 flex xl:flex-row flex-col gap-4 items-center align-middle justify-center">
      <div className="flex sm:flex-row flex-col  gap-4">
        <div className="max-w-full shadow-3xl p-2 rounded-lg">
          <Chart
            categories={[
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ]}
            series={[31, 40, 28, 51, 42, 17, 55, 44]}
          />
        </div>

        <div className="max-w-full shadow-3xl p-2 rounded-lg">
          <Chart
            categories={[
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ]}
            series={[31, 40, 28, 51, 42, 17, 55, 44]}
          />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col  gap-4">
        <div className="max-w-full shadow-3xl p-2 rounded-lg">
          <Chart
            categories={[
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ]}
            series={[31, 40, 28, 51, 42, 17, 55, 44]}
          />
        </div>

        <div className="max-w-full shadow-3xl p-2 rounded-lg">
          <Chart
            categories={[
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ]}
            series={[31, 40, 28, 51, 42, 17, 55, 44]}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboardChart;
