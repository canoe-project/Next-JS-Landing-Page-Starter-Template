export interface AxiosRes<T> {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      item: T[];
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}
