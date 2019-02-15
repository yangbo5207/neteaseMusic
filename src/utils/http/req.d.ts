import { AxiosRequestConfig } from 'axios';

declare namespace req {
  type ReqType = 'JSONString' | 'paramString' | 'formdata'
  interface HTTPReqConfig extends AxiosRequestConfig {
    hasToken?: boolean,
    requestType: ReqType,
    token?: string
  }

  interface ErrorCode {
    [key: number]: string
  }
}