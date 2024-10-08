export interface IResponse<IData> {
  status: boolean;
  message: string;
  data: IData;
  error?: any;
}
