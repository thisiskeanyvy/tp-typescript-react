import styled from '@emotion/styled';
import { Card } from '@mui/material';
import type { Theme as MuiTheme } from '@mui/material/styles';

export const StyledProductCard = styled(Card)(({ theme }) => {
  const muiTheme = theme as unknown as MuiTheme;
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: muiTheme.shadows[8],
    },
  };
});

