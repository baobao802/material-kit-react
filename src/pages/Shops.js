import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import useSWR from 'swr';
import { shopApi } from '../apis';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { ShopCard, ShopsSearch, ShopsSort } from '../sections/@dashboard/shops';
//
import SHOPS from '../_mocks_/shops';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Shops() {
  const { data } = useSWR('getShops', shopApi.getShops);

  return (
    <Page title="Dashboard: Shops | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Shops
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Post
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <ShopsSearch shops={SHOPS} />
          <ShopsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {data?.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
