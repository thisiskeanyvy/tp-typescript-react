import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface LabelProps extends TypographyProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

Label.displayName = "Label";

export default Label;

