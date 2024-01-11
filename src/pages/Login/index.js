import React from 'react'
import { Form, Formik, } from 'formik'
import Schema from 'Schemas'
import Button from 'components/Button'
import CustomInput from 'components/CustonFormInputs/CustomInput'
import { Link } from 'react-router-dom'  
import OauthButton from 'components/Button/OauthButton'
import { ReactComponent as FacebookLogo } from "../../assets/icons/facebook.svg";
import { ReactComponent as GoogleLogo } from "../../assets/icons/google.svg";
import { ReactComponent as AppleLogo } from "../../assets/icons/apple-logo.svg"
 
 function Login() {
  return (
    <div className='flex flex-col gap-10'>
      <span className='w-full text-center text-2xl font-medium uppercase'>
        LOGIN TO YOUR ACCOUNT
        </span>
      <Formik
        initialValues={{email:"", password:""}}
        validationSchema={Schema}
      >
        {({isSubmitting}) => (
          <Form className='flex flex-col gap-4 w-full'> 
            <CustomInput
              label="E-mail"
              name="email"
              type="email"
              placeholder="Enter your E-mail"
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              obscured
              readOnly={false}
              placeholder="Enter your password"
            />
            <Link to="/reset-password"> 
              <span className='flex flex-col text-end underline'>Forgot password</span>
            </Link>
            <Button disabled={isSubmitting}> LOGIN </Button>
            <p className="my-2 text-lg text-center"> Do not have an Account? <Link to="/register" className='underline'>Create an Account</Link></p>
            <OauthButton>
              <FacebookLogo />
              Sign in With Facebook
            </OauthButton>
            <OauthButton>
              <GoogleLogo />
              Sign in with Google
            </OauthButton>
            <OauthButton>
              <AppleLogo/>
              Sign in With Apple
            </OauthButton>
          </Form>
        )}
      </Formik>
    </div>
  

  )
}
export default Login
