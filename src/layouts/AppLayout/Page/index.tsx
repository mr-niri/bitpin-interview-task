import AppHeader from "components/AppHeader";
import PageLoader from "layouts/AppLayout/Page/PageLoader";
import { Suspense, type FC } from "react";
import { Outlet } from "react-router-dom";
import MainHolder from "./styled";

const Page: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <MainHolder>
      <AppHeader />
        <Outlet />
      </MainHolder>
    </Suspense>
  );
};

export default Page;
