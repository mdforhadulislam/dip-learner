const readedBookResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop3: {
    breakpoint: { max: 3000, min: 1500 },
    items: 7,
  },
  desktop2: {
    breakpoint: { max: 1500, min: 1024 },
    items: 6,
  },
  desktop1: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

export { readedBookResponsive };
