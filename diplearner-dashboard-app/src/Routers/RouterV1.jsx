import { Button } from "keep-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "../Utils/Layouts";

const RouterV1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layouts>
              <Button size="md">Default</Button>
            </Layouts>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterV1;
