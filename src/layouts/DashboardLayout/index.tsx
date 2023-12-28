import { useEffect, type FC } from "react";
import { Outlet } from "react-router-dom";

import ENV from "utils/ENV";

const DashboardLayout: FC = () => {
  const onOpenSocket = (e: Event) => {
    console.log("open", e);
  };

  const onCloseSocket = () => {
    console.log("close");
  };

  const onErrorSocket = () => {
    console.log("error");
  };

  const onMessageSocket = (event: MessageEvent) => {
    console.log("message", JSON.parse(event.data));
  };

  const initialWebSocket = () => {
    const ws = new WebSocket(ENV.WEB_SOCKET_URL);
    ws.addEventListener("open", onOpenSocket);
    ws.addEventListener("close", onCloseSocket);
    ws.addEventListener("error", onErrorSocket);
    ws.addEventListener("message", onMessageSocket);

    return () => {
      ws.removeEventListener("open", () => onOpenSocket);
      ws.removeEventListener("close", onCloseSocket);
      ws.removeEventListener("error", onErrorSocket);
      ws.removeEventListener("message", onMessageSocket);
    };
  };

  useEffect(initialWebSocket, []);

  return <Outlet />;
};

export default DashboardLayout;
