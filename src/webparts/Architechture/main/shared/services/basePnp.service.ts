import { SPFI } from "@pnp/sp";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import "@pnp/sp/webs";
import { getSP } from "../../config/pnpJs/config";
import ConfigService from "./config.service";

class BasePnpService extends ConfigService {
  private _sp: SPFI;
  private static basePnpService: BasePnpService;

  constructor() {
    super();
    this._sp = getSP();
  }

  static getPersistentInstance = () => {
    if (this.basePnpService !== undefined) {
      return this.basePnpService;
    }

    this.basePnpService = new BasePnpService();
    return this.basePnpService;
  };

  async getAll(ListName: string, ResponseKeys: string[]) {
    try {
      const response: Object[] = await this._sp.web.lists
        .getByTitle(ListName)
        .items.select(...ResponseKeys)();
      return this.ResponseSuccess(response);
    } catch (error) {
      console.error("Pnp Error=> getAll=> ", error);
      return this.ResponseError(error.message, error);
    }
  }

  async getSingle(ListName: string, itemID: number, ResponseKeys: string[]) {
    try {
      const response: Object = await this._sp.web.lists
        .getByTitle(ListName)
        .items.getById(itemID)
        .select(...ResponseKeys)();
      return this.ResponseSuccess(response);
    } catch (error) {
      console.error("Pnp Error=> getSingle=> ", error);
      return this.ResponseError(error.message, error);
    }
  }

  async create(ListName: string, payload: Object) {
    try {
      const response: Object = await this._sp.web.lists
        .getByTitle(ListName)
        .items.add(payload);
      return this.ResponseSuccess(response);
    } catch (error) {
      console.error("Pnp Error=> create=> ", error);
      return this.ResponseError(error.message, error);
    }
  }

  async update(ListName: string, itemID: number, payload: Object) {
    try {
      const dataList = await this._sp.web.lists.getByTitle(ListName);
      const response: Object = await dataList.items
        .getById(itemID)
        .update(payload);
      return this.ResponseSuccess(response);
    } catch (error) {
      console.error("Pnp Error=> update=> ", error);
      return this.ResponseError(error.message, error);
    }
  }

  async delete(ListName: string, itemID: number) {
    try {
      const dataList = await this._sp.web.lists.getByTitle(ListName);
      const response = await dataList.items.getById(itemID).delete();
      return this.ResponseSuccess(response);
    } catch (error) {
      console.error("Pnp Error=> delete=> ", error);
      return this.ResponseError(error.message, error);
    }
  }

  async createFile(file: File, libraryName: string) {
    try {
      let result;
      if (file.size <= 10485760) {
        //small upload
        result = await this._sp.web
          .getFolderByServerRelativePath(libraryName)
          .files.addUsingPath(file.name, file, { Overwrite: true });
      } else {
        //large upload
        result = await this._sp.web
          .getFolderByServerRelativePath(libraryName)
          .files.addChunked(file.name, file, {
            progress: (data) => {
              console.log(`Upload progress: ${data.stage}`);
            },
            Overwrite: true,
          });
      }
      return this.ResponseSuccess(result);
    } catch (error) {
      return this.ResponseError(error.message, error);
    }
  }
  async getFile(fileUrl: string) {
    try {
      const file = await this._sp.web.getFileByServerRelativePath(fileUrl);
      const fileContent = await file.getBuffer();
      this.ResponseSuccess(fileContent);
      console.log("Successfully fetch the file", fileContent);
    } catch (error) {
      this.ResponseError(error.message, error);
    }
  }
  async getByFilter(
    ListName: string,
    filter: string,
    pageSize: number,
    ResponseKeys: string[]
  ) {
    try {
      const response: any = await this._sp.web.lists
        .getByTitle(ListName)
        .items.top(pageSize || 1)
        .filter(filter)
        .select(...ResponseKeys)();
      return this.ResponseSuccess(response);
    } catch (error) {
      console.error("Pnp Error=> getAll=> ", error);
      return this.ResponseError(error.message, error);
    }
  }
}

export default BasePnpService;
