import { Box } from "@mui/material";
import type { FC } from "react";

const message = "متأسفانه صفحه مورد نظر شما وجود ندارد.";

const ErrorPage: FC = () => {
  return <Box id="error-page">{message}</Box>;
};

export default ErrorPage;
