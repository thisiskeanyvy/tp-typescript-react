import React, { useState, useMemo } from 'react';
import { Box } from '@mui/material';
import FilterBar from '../../3-organisms/FilterBar';
import ProductList from '../../3-organisms/ProductList';
import { plants } from '../../data/plants';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPlants = useMemo(() => {
    return plants.filter(plant => {
      const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === null || plant.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Box>
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onSearch={setSearchQuery}
      />
      <ProductList plants={filteredPlants} />
    </Box>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;

