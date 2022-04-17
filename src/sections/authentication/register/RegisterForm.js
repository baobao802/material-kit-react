import * as Yup from 'yup';
import { Fragment, useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import { shopApi } from '../../../apis';
import AutocompleteMapPlace from '../../../components/AutocompleteMapPlace';
import Iconify from '../../../components/Iconify';
import Toast from '../../../components/Toast';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    salonName: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required("Salon's name required"),
    phoneNumber: '',
    address: Yup.object().required('Address is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      salonName: '',
      phoneNumber: '',
      address: {}
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      try {
        const res = await shopApi.registerShop(values);
        if (res.data.status === 200) {
          navigate('/login', { replace: true });
        }
        if (res.data.status === 400) {
          setError(res.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik;

  return (
    <>
      <Toast variant="error" isOpen={Boolean(error)} message={error} onClose={() => setError('')} />
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                label="Họ"
                {...getFieldProps('firstName')}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />

              <TextField
                fullWidth
                label="Tên"
                {...getFieldProps('lastName')}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </Stack>

            <TextField
              fullWidth
              autoComplete="email"
              type="email"
              label="Email"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="Mật khẩu"
              {...getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />

            <TextField
              fullWidth
              autoComplete="salon-name"
              type="text"
              label="Tên cửa hàng"
              {...getFieldProps('salonName')}
              error={Boolean(touched.salonName && errors.salonName)}
              helperText={touched.salonName && errors.salonName}
            />

            <TextField
              fullWidth
              autoComplete="phone"
              type="number"
              label="Số điện thoại"
              {...getFieldProps('phoneNumber')}
              error={Boolean(touched.phoneNumber && errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
            />

            <AutocompleteMapPlace
              {...getFieldProps('address')}
              setFormikFieldValue={setFieldValue}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Đăng ký
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </>
  );
}
