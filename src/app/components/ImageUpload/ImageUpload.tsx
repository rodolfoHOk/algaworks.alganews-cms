import { mdiDelete, mdiUpload } from '@mdi/js';
import Icon from '@mdi/react';
import { useEffect } from 'react';
import { ChangeEvent, useState } from 'react';
import FileService from '../../../sdk/services/File.service';
import Loading from '../Loading';
import * as IU from './ImageUpload.styles';

export interface ImageUploadProps {
  label: string;
  onImageUpload: (imageUrl: string) => any;
  preview?: string;
}

function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | undefined>(undefined);

  const [uploading, setUploading] = useState<boolean>(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', async e => {
        try {
          setUploading(true);
          setFilePreview(String(e.target?.result));
          const imageUrl = await FileService.upload(file);
          props.onImageUpload(imageUrl);
        } finally {
          setUploading(false)
        }
      });
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    setFilePreview(props.preview);
  }, [props.preview]);

  if (filePreview) {
    return <IU.ImagePreviewWrapper>
      <Loading show={uploading} />
      <IU.ImagePreview preview={filePreview}>
        <IU.Button
          onClick={() => setFilePreview(undefined)}
        >
          <span>Remover imagem</span>
          <Icon
            size={'24px'}
            path={mdiDelete}
          />
        </IU.Button>
      </IU.ImagePreview>
    </IU.ImagePreviewWrapper>
  }

  return <IU.Wrapper>
    <Loading show={uploading} />
    <IU.Label>
      <Icon
        size={'24px'}
        path={mdiUpload}
      />
      {props.label}
      <IU.Input
        type="file"
        onChange={handleChange}
      />
    </IU.Label>
  </IU.Wrapper>
}

export default ImageUpload;
