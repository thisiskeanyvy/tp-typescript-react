// ProductCard: carte produit avec navigation et affichage des détails

import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '../../1-atoms/Button';
import Price from '../../1-atoms/Price';
import Label from '../../1-atoms/Label';
import { Plant } from '../../data/plants';
import { StyledProductCard } from './ProductCard.slots';

export interface ProductCardProps {
  plant: Plant;
}

const ProductCard: React.FC<ProductCardProps> = ({ plant }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${plant.id}`);
  };

  return (
    <StyledProductCard>
      <CardMedia
        component="div"
        sx={{
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 80,
          backgroundColor: '#f5f5f5',
        }}
      >
        {plant.image}
      </CardMedia>
      <CardContent>
        <Label variant="h6" component="h2" gutterBottom>
          {plant.name}
        </Label>
        <Label variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {plant.description.substring(0, 100)}...
        </Label>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Price amount={plant.price} />
          <Label variant="caption" color="text.secondary">
            Stock: {plant.stock}
          </Label>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleViewDetails}
        >
          Voir les détails
        </Button>
      </CardActions>
    </StyledProductCard>
  );
};

ProductCard.displayName = "ProductCard";

export default ProductCard;

