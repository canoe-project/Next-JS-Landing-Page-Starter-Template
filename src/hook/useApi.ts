import axios from 'axios';
import useSWR, { SWRResponse } from 'swr';

export const fetcher = (url: string) =>
  axios.get(`${url}`).then(async ({ data }) => {
    return data;
  });

const useApi = <T>(url: string) => {
  const response = useSWR(url, fetcher);

  return response as SWRResponse<T, any>;
};

export default useApi;
