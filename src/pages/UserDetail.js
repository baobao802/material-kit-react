import { Container, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Page from '../components/Page';
import UserDetailForm from '../sections/@dashboard/user/UserDetailForm';
import Iconify from '../components/Iconify';
import USERLIST from '../_mocks_/users';

function UserDetail() {
  const { userId } = useParams();

  const user = USERLIST.find((user) => user.id === userId);
  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <Page title={`User Details | ${fullName}`}>
      <Container>
        <Stack direction="row" alignItems="center" gap={1} mb={5}>
          <IconButton variant="contained" component={RouterLink} to="/dashboard/users">
            <Iconify icon="eva:arrow-back-fill" />
          </IconButton>
          <Typography variant="h4">{fullName}</Typography>
        </Stack>

        <UserDetailForm defaultValues={user} />
      </Container>
    </Page>
  );
}

export default UserDetail;
