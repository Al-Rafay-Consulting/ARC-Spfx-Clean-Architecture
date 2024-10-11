import { IResponse } from "../interface/ISerivice.interface";

class ConfigService {
  ResponseSuccess(data: any): IResponse<any> {
    const response = {
      status: true,
      message: "Success",
      data: data,
    };
    return response;
  }

  ResponseError(errorMessage: string, error?: any): IResponse<any> {
    const genericMessage = "Something went wrong";
    const response = {
      status: false,
      message: errorMessage || genericMessage,
      data: null,
      error: error,
    };
    return response;
  }
}

export default ConfigService;
