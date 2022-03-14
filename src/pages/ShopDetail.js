import { Box, Container, IconButton, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
//
import SHOPS from '../_mocks_/shops';

// ----------------------------------------------------------------------

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px'
});

function ShopDetail() {
  const { shopId } = useParams();

  const shop = SHOPS.find((shop) => shop.id === +shopId);
  return (
    <Page title={`Shop Details | ${shop.name}`}>
      <Container>
        <Stack direction="row" alignItems="center" gap={1} mb={5}>
          <IconButton variant="contained" component={RouterLink} to="/dashboard/shops">
            <Iconify icon="eva:arrow-back-fill" />
          </IconButton>
          <Typography variant="h4">{shop.name}</Typography>
        </Stack>

        <Box height="420px" position="relative">
          <CoverImgStyle src={shop.cover} alt={shop.name} />
          {/* <Box
            position="absolute"
            bottom="20px"
            left="20px"
            p="20px"
            sx={{ backgroundColor: 'rgba(0,0,0,.5)', borderRadius: '10px', maxWidth: '420px' }}
          >
            <Typography variant="h4" color="white" gutterBottom>
              {shop.name}
            </Typography>
            <Typography variant="p" color="white">
              {shop.description}
            </Typography>
          </Box> */}
        </Box>
      </Container>
    </Page>
  );
}

export default ShopDetail;
