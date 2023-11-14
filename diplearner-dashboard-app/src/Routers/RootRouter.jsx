import { BrowserRouter } from "react-router-dom";
import UserLayout from "../Utils/UserLayout";
import AdminRouter from "./AdminRouter";
import ComonRouter from "./ComonRouter";
import UserRouter from "./UserRouter";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <UserLayout>dd</UserLayout>
      {/* Common(every one access this) Route  */}
      <ComonRouter />

      {/* user Route  */}
      <UserRouter />

      {/* Admin route  */}
      <AdminRouter />
    </BrowserRouter>
  );
};

export default RootRouter;
