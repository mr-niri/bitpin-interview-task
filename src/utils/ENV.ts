type MODE = "production" | "staging";

const MODE = import.meta.env.MODE as MODE;
const isStaging = MODE === "staging";

const ENV = {
  MODE,
  AUTH_COOKIE_KEY: "_auth",
  API_BASE_URL: isStaging
    ? "https://api.bitpin.ir/v1/"
    : "https://api.bitpin.ir/v1/",
    WEB_SOCKET_URL: isStaging ? "wss://ws.bitpin.ir/" : "wss://ws.bitpin.ir/"

} as const;

export default ENV;
