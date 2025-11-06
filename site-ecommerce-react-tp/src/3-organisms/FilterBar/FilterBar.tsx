import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SearchBar from '../../2-molecules/SearchBar';

export interface FilterBarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSearch: (query: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onCategoryChange,
  onSearch,
}) => {
  const handleCategoryChange = (
    _event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => {
    onCategoryChange(newCategory === '' ? null : newCategory);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <SearchBar onSearch={onSearch} />
      </Box>
      <ToggleButtonGroup
        value={selectedCategory || ''}
        exclusive
        onChange={handleCategoryChange}
        aria-label="catégorie de plantes"
      >
        <ToggleButton value="" aria-label="toutes">
          Toutes
        </ToggleButton>
        <ToggleButton value="interieur" aria-label="intérieur">
          Intérieur
        </ToggleButton>
        <ToggleButton value="exterieur" aria-label="extérieur">
          Extérieur
        </ToggleButton>
        <ToggleButton value="aromates" aria-label="aromates">
          Aromates
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

FilterBar.displayName = "FilterBar";

export default FilterBar;

