export const profileViewsAndLikes = {
  profileViews: 110,
  profileLikes: 69,
  data: [
    { date: new Date(), views: 10, likes: 4 },
    { date: new Date(), views: 20, likes: 10 },
    { date: new Date(), views: 50, likes: 30 },
    { date: new Date(), views: 30, likes: 20 },
    { date: new Date(), views: 40, likes: 30 },
    { date: new Date(), views: 16, likes: 50 },
    { date: new Date(), views: 10, likes: 5 },
    { date: new Date(), views: 40, likes: 30 },
  ],
};

export const completeProfile = {
  series: [67],
  option: {
    chart: {
      height: 220,
      type: "radialBar",
    },

    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "15px",
            color: "",
            offsetY: 75,
            fontWeight: "600",
          },
          value: {
            offsetY: 15,
            fontSize: "19px",
            color: undefined,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Complete Profile"],
  },
};
