import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { useTranslation } from '../../hooks';

export type FileDownloadButtonProps = {
  content: string;
  fileName: string;
  fileType: string;
};

export const FileDownloadButton = (props: FileDownloadButtonProps) => {
  const { content, fileName, fileType } = props;
  const { t: intl } = useTranslation();
  const download = () => {
    const link = document.createElement('a');
    const file = new Blob([content], { type: fileType });
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
  };

  return (
    <Tooltip title={intl('components.fileDownloadButton.tooltipTitle')} arrow>
      <Button
        size="small"
        startIcon={<GetAppIcon />}
        onClick={download}
        variant="text"
        color="inherit"
      >
        {intl('components.fileDownloadButton.buttonText')}
      </Button>
    </Tooltip>
  );
};
