/* eslint-disable @typescript-eslint/no-floating-promises */

import * as React from "react";
import BasePnpService from "../../../../shared/services/basePnp.service";
import { PrimaryButton } from "@fluentui/react";

const FileUploader = () => {

  const handleFetch = async () => {
    const service = BasePnpService.getPersistentInstance();
    const file = "/sites/Testing/PracticeLib/image2.jpeg";
    const response = await service.getFile(file);
    console.log(response);
  };

  const handleUpload = async (event: any) => {
    const files = event.target.files;
    const libraryName = "/sites/Testing/PracticeLib";
    const service = BasePnpService.getPersistentInstance();
    const response = await service.createFile(files[0], libraryName);
    console.log(files, "TEST FILE RAW OBJ");
    console.log(response);
  };

  return (
    <div>
      <PrimaryButton onClick={handleFetch}>Fetch File</PrimaryButton>
      <input type="file" id="fileInput" onChange={handleUpload} />
    </div>
  );
};
export default FileUploader;
