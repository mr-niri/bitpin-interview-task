import { Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { type FC } from "react";
import { socketStatusAtom } from "store/atoms/globalAtom";
import strings from "./strings.json";
import AppHeaderWrapper from "./styled";
const AppHeader: FC = () => {
  const socketStatusInfo = useAtomValue(socketStatusAtom);

  return (
    <AppHeaderWrapper>
      <Typography variant="caption">
        {`${strings.SocketStatus}: ${socketStatusInfo.status}`}
      </Typography>
      <Typography >{strings.title}</Typography>
      
    </AppHeaderWrapper>
  );
};

export default AppHeader;
