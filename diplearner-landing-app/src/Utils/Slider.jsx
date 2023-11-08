import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop3: {
    breakpoint: { max: 3000, min: 1500 },
    items: 4,
  },
  desktop2: {
    breakpoint: { max: 1500, min: 1024 },
    items: 3,
  },
  desktop1: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const Slider = ({ children, coustomResponsive }) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={coustomResponsive ? coustomResponsive : responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2600}
      keyBoardControl={true}
      customTransition="all 1s"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={[
        "tablet",
        "mobile",
        "desktop1",
        "desktop2",
        "desktop3",
      ]}
      rewindWithAnimation={true}
      shouldResetAutoplay={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px py-8"
    >
      {children}
    </Carousel>
  );
};

export default Slider;
