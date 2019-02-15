import http from 'src/utils/http';
import host from 'src/utils/host';

/** 获取推荐歌单 */
export function getRecommendedApi(): Promise<home.Recommended> {
  return http.get(`${host}/personalized`);
}
