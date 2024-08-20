import React from 'react';
import AttachFile from '@mui/icons-material/AttachFile';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { useTranslationRef } from '@backstage/core-plugin-api/alpha';
import { toolboxTranslationRef } from '../../translation';

type Props = {
  onFileLoad: (input: File) => void;
  id?: string;
  buttonText?: string;
  accept?: string;
};

export const FileUploadButton = (props: Props) => {
  const { t: intl } = useTranslationRef(toolboxTranslationRef);
  const {
    onFileLoad,
    id = 'uploadBtn',
    buttonText = intl('components.fileUploadButton.buttonText'),
    accept = '*/*',
  } = props;

  return (
    <>
      <Tooltip arrow title={intl('components.fileUploadButton.tooltipTitle')}>
        <label htmlFor={id}>
          <Button
            component="span"
            size="small"
            startIcon={<AttachFile />}
            variant="text"
            color="inherit"
          >
            {buttonText}
          </Button>
        </label>
      </Tooltip>
      <input
        type="file"
        accept={accept}
        id={id}
        hidden
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (!e?.target?.files?.length) {
            return null;
          }
          return onFileLoad(e.target.files[0]);
        }}
      />
    </>
  );
};
