import { type FC } from "react";
import PageLoadingWrapper from "./styled";
import CircularProgress from "@mui/material/CircularProgress";

const PageLoader: FC = () => {
  return (
    <PageLoadingWrapper>
      <CircularProgress />
    </PageLoadingWrapper>
  );
};

export default PageLoader;
