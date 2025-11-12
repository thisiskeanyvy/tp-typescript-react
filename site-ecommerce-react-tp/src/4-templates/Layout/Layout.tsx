// Layout: template principal avec Header et contenu routable

import React from 'react';
import { Container } from '@mui/material';
import Header from '../../3-organisms/Header';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {children}
      </Container>
    </>
  );
};

Layout.displayName = "Layout";

export default Layout;

