import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, type FC } from "react";
import { Outlet } from "react-router-dom";
import { marketsListAtom, socketStatusAtom } from "store/atoms/globalAtom";

import ENV from "utils/ENV";

const DashboardLayout: FC = () => {
  const setSocketStatusInfo = useSetAtom(socketStatusAtom);
  const setMarketListInfo=useSetAtom(marketsListAtom)
  const socketStatusInfo = useAtomValue(socketStatusAtom);

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
    
    const data = JSON.parse(event.data);

    if (data.message === "sub_to_price_info") {
      setSocketStatusInfo({
        status: "Connecting",
        message: "Subscribed to price info."
      });
    } else if (data.message === "PONG") {
      console.log('pong')
      setSocketStatusInfo({
        status: "Connecting",
        message: "PONG"
      });
    } else if (data.event === "currency_price_info_update") {

      // we could have done something like {event, event_time, ...rest} = data
      // but it could cause some performance issues.
      delete data.event;
      delete data.event_time
      setMarketListInfo({ marketsList: data });
    }

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

    const pingInterval = setInterval(()=> {
      if (socketStatusInfo.status === "Connected"){
        ws.send(
          JSON.stringify(
            { "message" : "PING"}
          )
        )
      }
    }, 10000)

    return () => {
      clearInterval(pingInterval)
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
