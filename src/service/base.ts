import axios from 'axios';

const ERR_OK = 0;
const baseURL = import.meta.env.PROD
  ? 'http://ustbhuangyi.com/music-next/'
  : '/';

axios.defaults.baseURL = baseURL;

export const get = <T>(url: string, params?: unknown): Promise<T> =>
  axios
    .get(url, {
      params,
    })
    .then((res) => {
      const serverData = res.data;
      if (serverData.code === ERR_OK) {
        return serverData.result;
      }
    })
    .catch((e) => {
      console.log(e);
    });
