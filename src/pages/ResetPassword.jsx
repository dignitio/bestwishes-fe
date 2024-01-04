import Schema from 'Schemas'
import Button from 'components/Button'
import CustomInput from 'components/CustonFormInputs/CustomInput'
import { Form, Formik } from 'formik'
import React from 'react'

export default function ResetPassword() {
  return (
    <div className='flex flex-col gap-10'>
      <span className='w-full text-center text-3xl font-medium uppercase'>Password Reset</span>
      <span className='w-full text-center text-lg font-medium uppercase'>Enter Your E-mail Address to Reset Your Password</span>
      <Formik
        initialValues={{email:""}}
        validationSchema={Schema}
      >
        {({isSubmitting}) => (
          <Form className='flex flex-col gap-6 w-full'>
            <CustomInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter Your email address"
            />
            <Button disabled={isSubmitting}> Reset Password </Button>
              <p className='my-2 text-lg text-center'>Remember Password? <a href="login" className='underline'><span> Login </span></a></p>
          </Form>
        )}
      </Formik>
    </div>
  )
}
