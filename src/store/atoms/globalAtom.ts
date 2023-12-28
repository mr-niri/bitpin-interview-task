import { atomWithReset } from "jotai/utils";

type SocketStatusAtom = {
  status: "Connected" | "Disconnected" | "Connecting" | "Error";
  message?: string;
};

export const socketStatusAtom = atomWithReset<SocketStatusAtom>({
  status: "Disconnected"
});
