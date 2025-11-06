import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, Chip, Divider } from '@mui/material';
import Button from '../../1-atoms/Button';
import Label from '../../1-atoms/Label';
import Price from '../../1-atoms/Price';
import { plants } from '../../data/plants';
import { useCart } from '../../contexts/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const plant = plants.find(p => p.id === parseInt(id || '0', 10));

  if (!plant) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Label variant="h5">Plante non trouvée</Label>
        <Button onClick={() => navigate('/')} sx={{ mt: 2 }}>
          Retour à l'accueil
        </Button>
      </Box>
    );
  }

  const handleAddToCart = () => {
    addToCart(plant, quantity);
    navigate('/cart');
  };

  const categoryLabels: Record<string, string> = {
    interieur: 'Intérieur',
    exterieur: 'Extérieur',
    aromates: 'Aromates',
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            p: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 400,
            fontSize: 150,
            backgroundColor: '#f5f5f5',
          }}
        >
          {plant.image}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Chip
            label={categoryLabels[plant.category]}
            color="primary"
            sx={{ mb: 2 }}
          />
          <Label variant="h3" gutterBottom>
            {plant.name}
          </Label>
          <Price amount={plant.price} variant="h4" />
          <Divider sx={{ my: 3 }} />
          <Label variant="body1" paragraph>
            {plant.description}
          </Label>
          <Divider sx={{ my: 3 }} />
          <Label variant="h6" gutterBottom>
            Conseils d'entretien
          </Label>
          <Box sx={{ mb: 3 }}>
            <Label variant="body2">
              <strong>Lumière:</strong> {plant.care.light}
            </Label>
            <br />
            <Label variant="body2">
              <strong>Arrosage:</strong> {plant.care.water}
            </Label>
            <br />
            <Label variant="body2">
              <strong>Température:</strong> {plant.care.temperature}
            </Label>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
            <Label variant="body1">Quantité:</Label>
            <Button
              variant="outlined"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <Label variant="h6" sx={{ minWidth: 40, textAlign: 'center' }}>
              {quantity}
            </Label>
            <Button
              variant="outlined"
              onClick={() => setQuantity(Math.min(plant.stock, quantity + 1))}
            >
              +
            </Button>
            <Label variant="caption" color="text.secondary" sx={{ ml: 2 }}>
              Stock disponible: {plant.stock}
            </Label>
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={handleAddToCart}
            disabled={plant.stock === 0}
          >
            Ajouter au panier
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

ProductPage.displayName = "ProductPage";

export default ProductPage;

