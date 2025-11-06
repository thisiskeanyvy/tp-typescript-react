import React from 'react';
import { Paper, Box, Divider } from '@mui/material';
import Button from '../../1-atoms/Button';
import Label from '../../1-atoms/Label';
import Price from '../../1-atoms/Price';
import { useCart } from '../../contexts/CartContext';

const CartSummary: React.FC = () => {
  const { getTotalPrice, getTotalItems, clearCart } = useCart();
  const total = getTotalPrice();
  const itemCount = getTotalItems();

  return (
    <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
      <Label variant="h6" gutterBottom>
        Récapitulatif
      </Label>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Label variant="body1">Articles ({itemCount})</Label>
        <Price amount={total} variant="body1" />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Label variant="h6">Total</Label>
        <Price amount={total} variant="h5" />
      </Box>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        disabled={itemCount === 0}
        onClick={clearCart}
      >
        Passer la commande
      </Button>
    </Paper>
  );
};

CartSummary.displayName = "CartSummary";

export default CartSummary;

