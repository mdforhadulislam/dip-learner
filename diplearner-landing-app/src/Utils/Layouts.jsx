import FooterBar from "@/Components/Footer/FooterBar";
import NavBar from "@/Components/NavBar/NavBar";

const Layouts = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="w-full h-[55px] lg:h-[65px]"></div>
      <div>{children}</div>
      <FooterBar />
    </div>
  );
};

export default Layouts;
