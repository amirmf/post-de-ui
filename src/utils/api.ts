import axios, {
  AxiosInstance,
  AxiosResponse,
  CancelTokenSource,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

const apiBasePath = "";
export interface CentralizedError extends Error {
  code?: string;
  response?: {
    status: number;
    data: {
      title: string;
      type: string;
      detail?: string;
      "remain-time"?: number;
      phone_number?: string;
      email?: string;
    };
  };
}
const instance: AxiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: { "Content-Type": "application/json", "Accept-Language": "fa" },
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";
    return config;
  },
  (error: AxiosError | CentralizedError) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError | CentralizedError) => Promise.reject(error),
);

const cancelTokenSource = axios.CancelToken.source();
const cancelRequest = (): CancelTokenSource => axios.CancelToken.source();

export { cancelTokenSource, cancelRequest };
export default instance;
