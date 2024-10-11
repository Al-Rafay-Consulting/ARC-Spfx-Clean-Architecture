/* eslint-disable @typescript-eslint/no-floating-promises */

import * as React from "react";
import BasePnpService from "../../../../shared/services/basePnp.service";
import { PrimaryButton } from "@fluentui/react";
import { MODULE_ENUMS } from "../../utils/enum";

const FileUploader = () => {
  const libName = MODULE_ENUMS.SP;
  const handleFetch = async () => {
    const service = BasePnpService.getPersistentInstance();
    const file = "/sites/kabir/PracticeLib/image2.jpg";
    await service.getFile(file);
  };

  const handleUpload = async (event: any) => {
    const files = event.target.files;
    const service = BasePnpService.getPersistentInstance();
    await service.createFile(files[0], libName.LIB_NAME);
  };

  return (
    <div>
      <PrimaryButton onClick={handleFetch}>Fetch File</PrimaryButton>
      <input type="file" id="fileInput" onChange={handleUpload} />
    </div>
  );
};
export default FileUploader;
