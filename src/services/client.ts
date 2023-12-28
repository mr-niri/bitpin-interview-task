import axios from "axios";
import ENV from "utils/ENV";

const client = axios.create({ baseURL: ENV.API_BASE_URL });


export default client;
