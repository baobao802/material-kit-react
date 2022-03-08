import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Stack,
  TextField,
  Avatar,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import useProvinces from '../../../hooks/useProvinces';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function UserDetailForm({ defaultValues }) {
  const navigate = useNavigate();
  const { execute, value: provinces } = useProvinces();
  const [showPassword, setShowPassword] = useState(false);
  const [pickedCity, setPickedCity] = useState(null);
  const { name, avatarUrl } = defaultValues;
  const cities =
    provinces?.map(({ code, name, districts }) => ({
      code,
      name,
      districts
    })) ?? [];

  useEffect(() => {
    execute(2);
  }, []);

  useEffect(() => {
    setPickedCity(cities.find((city) => city.name === defaultValues.city));
  }, [provinces]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    gender: Yup.boolean().required('Gender is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    street: Yup.string().required('Street is required')
  });

  const formik = useFormik({
    initialValues: defaultValues ?? {
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      position: '',
      status: '',
      city: '',
      district: '',
      street: ''
    },
    validationSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center" mb={3}>
              <Avatar
                alt={name}
                src={avatarUrl || '/static/images/broken-avatar.png'}
                sx={{ width: 128, height: 128 }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="text"
              label="First name"
              {...getFieldProps('firstName')}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="text"
              label="Last name"
              {...getFieldProps('lastName')}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth type="text" label="Gender" {...getFieldProps('gender')} disabled />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField fullWidth type="email" label="Email" {...getFieldProps('email')} disabled />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              type="text"
              label="Position"
              {...getFieldProps('position')}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="city-label">City</InputLabel>
              <Select
                labelId="city-label"
                id="city"
                label="City"
                {...getFieldProps('city')}
                onChange={(e) => {
                  setPickedCity(cities.find((city) => city.name === e.target.value));
                  getFieldProps('city').onChange(e);
                }}
                disabled
              >
                {cities.map(({ code, name }) => (
                  <MenuItem key={code} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="district-label">District</InputLabel>
              <Select
                labelId="district-label"
                id="district"
                label="District"
                {...getFieldProps('district')}
                disabled
              >
                {pickedCity?.districts.map(({ code, name }) => (
                  <MenuItem key={code} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type="text" label="Street" {...getFieldProps('street')} disabled />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                {...getFieldProps('status')}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="banned">Banned</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={9} />
          <Grid item xs={2}>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Save
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
