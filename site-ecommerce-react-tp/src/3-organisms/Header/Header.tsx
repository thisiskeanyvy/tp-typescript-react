import React from 'react';
import { AppBar, Toolbar, Badge, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Button from '../../1-atoms/Button';
import Label from '../../1-atoms/Label';
import { useCart } from '../../contexts/CartContext';
import { StyledHeader } from './Header.slots';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  return (
    <StyledHeader position="static">
      <Toolbar>
        <Box
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1 }}
          onClick={() => navigate('/')}
        >
          <Label variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            🌱 ESIEE-IT MyPlants
          </Label>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="inherit"
          startIcon={
            <Badge badgeContent={getTotalItems()} color="error">
              <ShoppingCartIcon />
            </Badge>
          }
          onClick={() => navigate('/cart')}
        >
          Panier
        </Button>
      </Toolbar>
    </StyledHeader>
  );
};

Header.displayName = "Header";

export default Header;

