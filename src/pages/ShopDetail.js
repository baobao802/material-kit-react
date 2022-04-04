import {
  Box,
  Container,
  Grid,
  IconButton,
  Input,
  Link,
  Rating,
  Stack,
  styled,
  Typography
} from '@mui/material';
import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import ShopDetailForm from '../sections/@dashboard/shops/ShopDetailForm';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
//
import SHOPS from '../_mocks_/shops';

// ----------------------------------------------------------------------

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

        <ShopDetailForm defaultValues={shop} />

        {/* <Box height="420px" position="relative" mb={5}>
          <CoverImgStyle src={shop.cover} alt={shop.name} />
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            htmlFor="icon-button-file"
            style={{ position: 'absolute', top: '0px', right: '0px' }}
          >
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              sx={{ display: 'none' }}
              onChange={(e) => console.log(e.target.files[0])}
            />
            <IconButton sx={{ color: 'white' }} aria-label="upload picture" component="span">
              <Iconify icon="bi:camera-fill" width={24} height={24} />
            </IconButton>
          </label>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Stack>
              <Typography variant="h4" gutterBottom>
                {shop.name}
              </Typography>
              <Box>
                <Rating
                  name="half-rating-read"
                  size="small"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Box>
              <Typography variant="p" gutterBottom>
                {shop.description}
              </Typography>
              <Stack direction="row" alignItems="center">
                <Typography variant="p" mr={1} gutterBottom>
                  Address:
                </Typography>
                <Typography gutterBottom sx={{ fontSize: '15px' }}>
                  {shop.street}, {shop.district}, {shop.city}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography variant="p" mr={1} gutterBottom>
                  Phone:
                </Typography>
                <Link href={`tel:${shop.phone}`} gutterBottom sx={{ fontSize: '15px' }}>
                  {shop.phone}
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography variant="p" mr={1} gutterBottom>
                  Email:
                </Typography>
                <Link href={`mailto:${shop.mail}`} gutterBottom sx={{ fontSize: '15px' }}>
                  {shop.email}
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} />
        </Grid> */}
      </Container>
    </Page>
  );
}

export default ShopDetail;
