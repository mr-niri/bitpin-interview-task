type MODE = "production" | "staging";

const MODE = import.meta.env.MODE as MODE;
const isStaging = MODE === "staging";

const ENV = {
  MODE,
  AUTH_COOKIE_KEY: "_auth",
  API_BASE_URL: isStaging
    ? "END_POINT_DOMAIN_STAGING"
    : "END_POINT_DOMAIN_PRODUCTION"
} as const;

export default ENV;
