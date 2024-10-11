export interface IResponse<IPropInterface> {
  status: string;
  message: string;
  data: IPropInterface;
}
