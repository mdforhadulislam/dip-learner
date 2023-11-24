import React, { useEffect, useState } from "react";
import DragBar from "../Components/NavBar/DragBar";
import NavBar from "../Components/NavBar/NavBar";
import Spinner from "./Spinner";

const Layouts = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <section className="w-full h-auto relative">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full h-[60px]"></div>
        <div className="w-full h-auto p-3  pb-10">
          <div className="container p-2 shadow-4xl m-auto rounded-lg">
            {children}
          </div>
        </div>
        <DragBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
    );
  }

  return <Spinner />;
};

export default Layouts;
