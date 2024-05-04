import { Header } from './Header.jsx'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Form, redirect, useSubmit } from 'react-router-dom'

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: ''
}

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Email Address is invalid')
    .required('Email Address is required'),
  phone: yup
    .string()
    .required('Phone Number is required')
    .matches(phoneRegExp, 'Phone Number is invalid'),
  address1: yup.string().required('Address Line 1 is required'),
  address2: yup.string(),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zip: yup.string().required('Zip Code is required')
})

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData()
  console.log('ACTION', formData)
  return redirect('/team')
}

export const Component = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  })
  const submit = useSubmit()

  return (
    <>
      <Header title='User Profile' subtitle='Create a New User Profile' />
      <Box mt={3}>
        {Object.keys(errors).length > 0 && (
          <Alert severity='error' sx={{ mb: 2 }}>
            <AlertTitle sx={{ fontWeight: 'bold' }}>
              Form Validation Errors
            </AlertTitle>
            {Object.keys(errors).map((fieldName) => (
              <Typography key={fieldName} variant='h5' component='div'>
                {errors[fieldName]?.message}
              </Typography>
            ))}
          </Alert>
        )}
        <Form
          // method='post'
          id='contact-form'
          onSubmit={(event) => {
            const target = event.currentTarget
            handleSubmit(() => {
              submit(target, { method: 'post' })
            })(event)
          }}
        >
          <Grid container>
            <Grid item xs={12} md={8} lg={6} xl={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='First Name'
                    type='text'
                    {...register('firstName')}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Last Name'
                    type='text'
                    {...register('lastName')}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Email Address'
                    type='text'
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Phone Number'
                    type='text'
                    {...register('phone')}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Address Line 1'
                    type='text'
                    {...register('address1')}
                    error={!!errors.address1}
                    helperText={errors.address1?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Address Line 2'
                    type='text'
                    {...register('address2')}
                    error={!!errors.address2}
                    helperText={errors.address2?.message}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='City'
                    type='text'
                    {...register('city')}
                    error={!!errors.city}
                    helperText={errors.city?.message}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label='State'
                    type='text'
                    {...register('state')}
                    error={!!errors.state}
                    helperText={errors.state?.message}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label='Zip Code'
                    type='text'
                    {...register('zip')}
                    error={!!errors.zip}
                    helperText={errors.zip?.message}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Stack spacing={2} direction='row' mt={2}>
            <Button type='submit' variant='contained'>
              Save
            </Button>
            <Button variant='outlined'>Cancel</Button>
          </Stack>
        </Form>
      </Box>
    </>
  )
}

Component.displayName = 'Profile'
