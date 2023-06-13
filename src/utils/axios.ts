import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { v4 } from 'uuid';

interface IAxiosRequestConfig extends AxiosRequestConfig {
  requestId?: string;
  disableProgress?: boolean;
}

interface IAxiosInstance extends AxiosInstance {
  request<T = any, R = AxiosResponse<T, any>>(config: AxiosRequestConfig): Promise<R>;
  get<T = any, R = AxiosResponse<T, any>>(url: string, config?: IAxiosRequestConfig | undefined): Promise<R>;
  post<T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    data?: D | undefined,
    config?: IAxiosRequestConfig | undefined
  ): Promise<R>;
  delete<T = any, R = AxiosResponse<T, any>>(url: string, config?: IAxiosRequestConfig | undefined): Promise<R>;
  put<T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    data?: D | undefined,
    config?: IAxiosRequestConfig | undefined
  ): Promise<R>;
}

export const _axios: IAxiosInstance = axios.create();

_axios.interceptors.request.use(
  (config: any) => {
    if (!config.disableProgress) {
      config.requestId = v4();
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default _axios;
