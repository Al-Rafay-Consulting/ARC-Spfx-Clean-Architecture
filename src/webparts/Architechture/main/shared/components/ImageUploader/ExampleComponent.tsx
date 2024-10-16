import * as React from 'react';
import ImageUploader from './ImageUploader';
import BasePnpService from '../../services/basePnp.service';
import { MODULE_ENUMS } from '../../../features/module-01/utils/enum';
import { useState } from 'react';

const ExampleComponent: React.FC = () => {
  
  const libName = MODULE_ENUMS.SP;

  const service = BasePnpService.getPersistentInstance();
  const [images,setImages] = useState([])
  const handleImageUpload = async () => {
        try {
          if (images.length>0) {
            const response = await service.createFile(images[0], libName.LIB_NAME);
            const imageUrl = response.data.ServerRelativeUrl;
            console.log('Image uploaded successfully:', imageUrl);
            return imageUrl;
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };
      const handleFileChange = (fileList: any) => {
        setImages(fileList);  
      };
  return (
    <div>
      <h1>Image Uploader</h1>
      <ImageUploader onSubmit={handleImageUpload} onFileChange={handleFileChange} />
    </div>
  );
};

export default ExampleComponent;
