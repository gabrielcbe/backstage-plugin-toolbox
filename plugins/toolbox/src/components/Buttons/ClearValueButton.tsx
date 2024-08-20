import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Clear from '@mui/icons-material/Clear';
import { useTranslation } from '../../hooks';

type Props = {
  setValue: (input: string) => void;
  tooltip?: string;
};

export const ClearValueButton = (props: Props) => {
  const { t: intl } = useTranslation();
  return (
    <Tooltip arrow title={props.tooltip ? props.tooltip : intl('components.clearValueButton.tooltipTitle')}>
      <Button
        size="small"
        startIcon={<Clear />}
        onClick={() => props.setValue('')}
        variant="text"
        color="inherit"
      >
        {intl('components.clearValueButton.buttonText')}
      </Button>
    </Tooltip>
  );
};
