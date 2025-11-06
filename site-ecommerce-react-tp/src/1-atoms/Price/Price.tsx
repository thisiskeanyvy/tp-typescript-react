import React from 'react';
import { Typography } from '@mui/material';

export interface PriceProps {
  amount: number;
  variant?: 'h6' | 'body1' | 'body2' | 'h5' | 'h4';
  color?: string;
}

const Price: React.FC<PriceProps> = ({ amount, variant = 'h6', color }) => {
  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return (
    <Typography variant={variant} color={color || 'primary'} fontWeight="bold">
      {formattedPrice}
    </Typography>
  );
};

Price.displayName = "Price";

export default Price;

