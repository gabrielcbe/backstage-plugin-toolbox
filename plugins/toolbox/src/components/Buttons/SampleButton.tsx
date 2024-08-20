import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Input from '@mui/icons-material/Input';
import { useTranslation } from '../../hooks';

type Props = {
  sample: string;
  setInput: (input: string) => void;
};

export const SampleButton = (props: Props) => {
  const { t: intl } = useTranslation();
  return (
    <Tooltip arrow title={intl('components.sampleButton.tooltipTitle')}>
      <Button
        size="small"
        startIcon={<Input />}
        onClick={() => props.setInput(props.sample)}
        variant="text"
        color="inherit"
      >
        {intl('components.sampleButton.buttonText')}
      </Button>
    </Tooltip>
  );
};
