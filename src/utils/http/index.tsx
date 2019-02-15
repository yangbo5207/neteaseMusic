import axios from 'axios';
import _ from 'lodash';
import { req } from './req';

/** 请求头信息调整 */
// @ts-ignore
axios.interceptors.request.use(async (config: req.HTTPReqConfig): Promise<any> => {
  if (!config.timeout) {
    config.timeout = 30 * 1000;
  }

  /** 给每个请求新增时间戳 */
  config.params = Object.assign({ _s: Date.now() }, config.params);

  /** 注入token */
  // 逻辑待定

  if (config.token) {
    config.headers.Authorization = config.token;
  }

  if (config.requestType && config.requestType === 'JSONString') {
    config.headers['Content-Type'] = 'application/json';
  }

  if (config.requestType && config.requestType === 'paramString') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.transformRequest = (data) => {
      let key,
        result = [];
      if (typeof data === 'string') {
        return data;
      }

      for (key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          result.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
        }
      }
      return result.join('&');
    };
  }

  if (config.requestType && config.requestType === 'formdata') {
    // TODO
    config.headers['Content-Type'] = 'multipart/form-data';
    config.transformRequest = (data) => {
      if (data instanceof FormData) {
        return data;
      }
      const f = new FormData();
      _.each(data, (value, key) => {
        f.append(key, value);
      });
      return f;
    };
  }

  return config;
})

/** 返回结果过滤 */
axios.interceptors.response.use((response: any): any => {
  console.log(response);

  return response.data;
})

export function get<T>(requestURL: string, config?: req.HTTPReqConfig): Promise<any> {
  return axios.get(requestURL, config);
}

export function post(requestURL: string, params: any, config?: req.HTTPReqConfig): Promise<any> {
  return axios.post(requestURL, params, config);
}

const http = {
  get, post
}

export default http;