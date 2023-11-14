import React from "react";
import { Route, Routes } from "react-router";

const ComonRouter = () => {
  return (
    <Routes>
      {/* Common Route  */}
      <Route path="/" element={<div>RootdRouter</div>} />
      <Route path="/*" element={<div>Error</div>} />
    </Routes>
  );
};

export default ComonRouter;
