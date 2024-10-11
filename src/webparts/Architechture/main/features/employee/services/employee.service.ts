import BasePnpService from "../../../shared/services/basePnp.service";
import { ICreatePayload } from "../interfaces/IService";
import { MODULE_ENUMS } from "../utils/enum";

class EmployeeService {
  private _listName: string = MODULE_ENUMS.SP.LIST_NAME;
  private basePnpService: BasePnpService;

  constructor() {
    this.basePnpService = BasePnpService.getPersistentInstance();
  }

  async getCustomers() {
    const response = await this.basePnpService.getAll(this._listName, [
      MODULE_ENUMS.SP.COLUMS.ALL,
    ]);
    return response;
  }

  async createCustomer(payload: ICreatePayload) {
    const response = await this.basePnpService.create(this._listName, payload);
    return response;
  }

  async updateCustomer(itemId: number, payload: ICreatePayload) {
    const response = await this.basePnpService.update(
      this._listName,
      itemId,
      payload
    );
    return response;
  }
}

export default EmployeeService;
