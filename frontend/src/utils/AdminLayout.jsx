import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <h1>Admin</h1>

      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
