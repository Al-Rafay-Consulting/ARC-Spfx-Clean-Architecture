import * as React from 'react';
import { useState } from 'react';
import { Upload, Button, Modal } from 'antd';
import { UploadFile } from 'antd/es/upload/interface';
import { PlusOutlined } from '@ant-design/icons';

interface ImageUploaderProps {
  onSubmit: () => void; 
  onFileChange: (fileList: UploadFile[]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onSubmit,onFileChange }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  const handlePreview = async (file: UploadFile) => {
    setPreviewImage(file.thumbUrl || file.url);
    setPreviewVisible(true);
  };

  const handleChange = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    setFileList(newFileList);
    onFileChange(newFileList)
    
  };

  const handleCancel = () => setPreviewVisible(false);

  return (
    <div>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={() => false} 
      >
        {fileList.length >= 8 ? null : (
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        )}
      </Upload>

      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="Preview" style={{ width: '100%' }} src={previewImage} />
      </Modal>

      <Button type="primary" onClick={onSubmit} disabled={!fileList.length}>
        Submit
      </Button>
    </div>
  );
};

export default ImageUploader;
