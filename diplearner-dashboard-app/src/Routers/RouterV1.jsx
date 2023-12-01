import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccessBook from "../Pages/AccessBook";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AdminSetting from "../Pages/Admin/AdminSetting";
import Book from "../Pages/Admin/Book";
import Chapter from "../Pages/Admin/Chapter";
import LandingControll from "../Pages/Admin/LandingControll";
import Pages from "../Pages/Admin/Pages";
import Payments from "../Pages/Admin/Payments";
import User from "../Pages/Admin/User";
import AllBook from "../Pages/AllBook";
import Dashboard from "../Pages/Dashboard";
import ReadBook from "../Pages/ReadBook";
import SingleBook from "../Pages/SingleBook";
import SingleBookPage from "../Pages/SingleBookPage";
import UserSetting from "../Pages/UserSetting";
import Layouts from "../Utils/Layouts";

const RouterV1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* user route  */}
        <Route
          path="/"
          element={
            <Layouts>
              <Dashboard />
            </Layouts>
          }
        />
        <Route
          path="/all-book"
          element={
            <Layouts>
              <AllBook />
            </Layouts>
          }
        />
        <Route
          path="/all-book/:id"
          element={
            <Layouts>
              <SingleBook />
            </Layouts>
          }
        />
        <Route
          path="/access-book"
          element={
            <Layouts>
              <AccessBook />
            </Layouts>
          }
        />
        <Route
          path="/access-book/:id/read"
          element={
            <Layouts>
              <ReadBook />
            </Layouts>
          }
        />
        <Route
          path="/access-book/:id/read/:chapterId/:pageId"
          element={
            <Layouts>
              <SingleBookPage />
            </Layouts>
          }
        />
        <Route
          path="/setting"
          element={
            <Layouts>
              <UserSetting />
            </Layouts>
          }
        />

        {/* admin route   */}
        <Route
          path="/admin"
          element={
            <Layouts>
              <AdminDashboard />
            </Layouts>
          }
        />
        <Route
          path="/book"
          element={
            <Layouts>
              <Book />
            </Layouts>
          }
        />
        <Route
          path="/chapter"
          element={
            <Layouts>
              <Chapter />
            </Layouts>
          }
        />
        <Route
          path="/pages"
          element={
            <Layouts>
              <Pages />
            </Layouts>
          }
        />
        <Route
          path="/payments"
          element={
            <Layouts>
              <Payments />
            </Layouts>
          }
        />
        <Route
          path="/user"
          element={
            <Layouts>
              <User />
            </Layouts>
          }
        />
        <Route
          path="/user/:id"
          element={
            <Layouts>
              <User />
            </Layouts>
          }
        />
        <Route
          path="/admin/setting"
          element={
            <Layouts>
              <AdminSetting />
            </Layouts>
          }
        />
        <Route
          path="/landing-controll"
          element={
            <Layouts>
              <LandingControll />
            </Layouts>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterV1;
