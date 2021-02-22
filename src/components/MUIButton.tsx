import React from 'react';
import Button from '@material-ui/core/Button';
import './MUIButton.css';

export interface MUIButtonProps {
  label: string;
}

export const MUIButton: React.FC<MUIButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      {...props}>
      {label}
    </Button>
  );
};
