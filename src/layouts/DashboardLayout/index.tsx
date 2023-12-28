import type { FC } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout: FC = () => {
  return <Outlet />;
};

export default DashboardLayout;
