import React from 'react';
import { Box, IconButton, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '../../1-atoms/Label';
import Price from '../../1-atoms/Price';
import { CartItem as CartItemType } from '../../contexts/CartContext';

export interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (plantId: number, quantity: number) => void;
  onRemove: (plantId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { plant, quantity } = item;

  const handleIncrease = () => {
    onUpdateQuantity(plant.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(plant.id, quantity - 1);
    } else {
      onRemove(plant.id);
    }
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ fontSize: 48 }}>{plant.image}</Box>
        <Box sx={{ flex: 1 }}>
          <Label variant="h6">{plant.name}</Label>
          <Price amount={plant.price} variant="body1" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={handleDecrease} size="small">
            <RemoveIcon />
          </IconButton>
          <Label variant="body1" sx={{ minWidth: 30, textAlign: 'center' }}>
            {quantity}
          </Label>
          <IconButton onClick={handleIncrease} size="small">
            <AddIcon />
          </IconButton>
          <Box sx={{ minWidth: 100, textAlign: 'right', ml: 2 }}>
            <Price amount={plant.price * quantity} variant="h6" />
          </Box>
          <IconButton onClick={() => onRemove(plant.id)} color="error" sx={{ ml: 1 }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

CartItem.displayName = "CartItem";

export default CartItem;

