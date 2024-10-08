import { getSP } from "../../config/pnpJs/config";
import ConfigService from "./config.service";
import { SPFI } from "@pnp/sp";
import { IFolder } from "@pnp/sp/folders"; // For folder operations
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

  async uploadFile(file: File, libraryName: string) {
    try {
      console.log(file, libraryName, "from basePnp");
      // Get the folder by its server-relative path
      const libraryRootFolder: IFolder =
        await this._sp.web.getFolderByServerRelativePath(libraryName);

      // Upload the file using addUsingPath
      const fileUploadResult = await libraryRootFolder.files.addUsingPath(
        file.name,
        file,
        { Overwrite: true }
      );

      console.log(fileUploadResult);
      return this.ResponseSuccess(fileUploadResult);
    } catch (error: any) {
      console.error("Error uploading file:", error);
      return this.ResponseError("File upload failed", error);
    }
  }
}

export default BasePnpService;
