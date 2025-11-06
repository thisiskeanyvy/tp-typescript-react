import React from 'react';
import { Grid, Box } from '@mui/material';
import ProductCard from '../../2-molecules/ProductCard';
import { Plant } from '../../data/plants';

export interface ProductListProps {
  plants: Plant[];
}

const ProductList: React.FC<ProductListProps> = ({ plants }) => {
  if (plants.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <p>Aucune plante trouvée.</p>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {plants.map(plant => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={plant.id}>
          <ProductCard plant={plant} />
        </Grid>
      ))}
    </Grid>
  );
};

ProductList.displayName = "ProductList";

export default ProductList;

