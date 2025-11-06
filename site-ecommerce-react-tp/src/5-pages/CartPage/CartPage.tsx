import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Label from '../../1-atoms/Label';
import Button from '../../1-atoms/Button';
import CartItem from '../../2-molecules/CartItem';
import CartSummary from '../../3-organisms/CartSummary';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Label variant="h5" gutterBottom>
          Votre panier est vide
        </Label>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{ mt: 3 }}
        >
          Continuer vos achats
        </Button>
      </Box>
    );
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Label variant="h4" gutterBottom>
          Panier ({cartItems.length} {cartItems.length > 1 ? 'articles' : 'article'})
        </Label>
        <Box sx={{ mt: 3 }}>
          {cartItems.map(item => (
            <CartItem
              key={item.plant.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <CartSummary />
      </Grid>
    </Grid>
  );
};

CartPage.displayName = "CartPage";

export default CartPage;

