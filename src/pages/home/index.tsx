import Button from "@mui/material/Button";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import strings from "./strings.json";
import HomeWrapper from "./styled";
const HomePage: FC = () => {
  const navigate = useNavigate();

  const onButtonClickHandler = () => {
    navigate("/dashboard");
  };
  return (
    <HomeWrapper>
      <Button onClick={onButtonClickHandler} variant="contained">
        {strings.marketPage}
      </Button>
    </HomeWrapper>
  );
};

export default HomePage;
