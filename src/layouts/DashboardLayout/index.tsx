import { useSetAtom } from "jotai";
import { useEffect, type FC } from "react";
import { Outlet } from "react-router-dom";
import { socketStatusAtom } from "store/atoms/globalAtom";

import ENV from "utils/ENV";

const DashboardLayout: FC = () => {
  const setSocketStatusInfo = useSetAtom(socketStatusAtom);

  const onOpenSocket = (e: Event) => {
    const ws = e.currentTarget as WebSocket;
    ws.send(
      JSON.stringify({
        method: "sub_to_price_info"
      })
    );

    setSocketStatusInfo({
      status: "Connected"
    });
  };

  const onCloseSocket = () => {
    setSocketStatusInfo({
      status: "Disconnected"
    });
  };

  const onErrorSocket = () => {
    setSocketStatusInfo({
      status: "Disconnected"
    });  };

  const onMessageSocket = (event: MessageEvent) => {
    console.log("message", JSON.parse(event.data));
  };

  const initialWebSocket = () => {
    setSocketStatusInfo({
      status: "Connecting"
    });

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
