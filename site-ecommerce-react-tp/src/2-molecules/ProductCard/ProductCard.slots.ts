import styled from '@emotion/styled';
import { Card } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const StyledProductCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

