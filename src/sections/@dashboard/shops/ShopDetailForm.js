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
  MenuItem,
  Input,
  IconButton,
  styled,
  Box,
  TextareaAutosize
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
// component
import useProvinces from '../../../hooks/useProvinces';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px'
});

export default function ShopDetailForm({ defaultValues }) {
  const navigate = useNavigate();
  const { execute, value: provinces } = useProvinces();
  const [pickedCity, setPickedCity] = useState(null);
  const { name, cover } = defaultValues;
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
      name: '',
      description: '',
      cover: '',
      email: '',
      status: '',
      city: '',
      district: '',
      street: '',
      openAt: '',
      closeAt: ''
    },
    validationSchema,
    onSubmit: () => {
      navigate('/dashboard/shops', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const onFileUpload = (e) => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append('file', e.target.files[0]);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="row" mb={3}>
              <Box width="100%" height="420px" position="relative" mb={5}>
                <CoverImgStyle src={cover} alt={name} />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="icon-button-file"
                  style={{ position: 'absolute', top: '0px', right: '0px' }}
                >
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    sx={{ display: 'none' }}
                    onChange={onFileUpload}
                  />
                  <IconButton sx={{ color: 'white' }} aria-label="upload picture" component="span">
                    <Iconify icon="bi:camera-fill" width={24} height={24} />
                  </IconButton>
                </label>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField fullWidth type="text" label="Shop's name" {...getFieldProps('name')} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth type="email" label="Email" {...getFieldProps('email')} disabled />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              fullWidth
              multiline
              type="text"
              label="Description"
              rows={4}
              maxRows={5}
              placeholder="Describe about your shope"
              {...getFieldProps('description')}
              style={{ resize: 'vertical' }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Open at"
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    {...getFieldProps('openAt')}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Close at"
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    {...getFieldProps('closeAt')}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
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
            <TextField fullWidth type="text" label="Street" {...getFieldProps('street')} />
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
                <MenuItem value="opened">Opened</MenuItem>
                <MenuItem value="closed">Closed</MenuItem>
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
