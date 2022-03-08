import { Container, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../components/Iconify';
import Page from '../components/Page';

function ShopDetail() {
  return (
    <Page title={`Shop Details | `}>
      <Container>
        <Stack direction="row" alignItems="center" gap={1} mb={5}>
          <IconButton variant="contained" component={RouterLink} to="/dashboard/shops">
            <Iconify icon="eva:arrow-back-fill" />
          </IconButton>
          <Typography variant="h4">Shop Name</Typography>
        </Stack>
      </Container>
    </Page>
  );
}

export default ShopDetail;
