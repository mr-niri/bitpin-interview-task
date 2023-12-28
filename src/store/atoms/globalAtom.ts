import { atomWithReset } from "jotai/utils";

type SocketStatusAtom = {
  status: "connected" | "disconnected" | "connecting" | "error";
  message?: string;
};

export const socketStatusAtom = atomWithReset<SocketStatusAtom>({
  status: "disconnected"
});
