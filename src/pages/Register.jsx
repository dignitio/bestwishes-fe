import Button from "components/Button";
import { Form, Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import Schema from "Schemas";
import React from "react";
import CustomInput from "components/CustonFormInputs/CustomInput";
import CustomCheckbox from "components/CustonFormInputs/CustomCheckbox";
import OauthButton from "components/Button/OauthButton";
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg";
import { ReactComponent as GoogleLogo } from "../assets/google.svg";

const onSubmit = async (values) => {
  console.log(values);
};

export default function Register() {
  return (
    <div className="flex flex-col gap-10">
      <span className="w-full text-center text-2xl font-medium uppercase ">
        Create Your Account
      </span>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "", acceptedTos: false }}
        validationSchema={Schema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-6 w-full ">
            <CustomInput
              label="Firstname"
              name="firstName"
              type="text"
              placeholder="Enter your Firstname"
            />
            <CustomInput
              label="Lastname"
              name="lastName"
              type="text"
              placeholder="Enter your Lastname"
            />
            <CustomInput label="E-mail" name="email" type="email" placeholder="Enter your E-mail" />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              obscured
              readOnly={false}
              placeholder="Enter your password"
            />
            <CustomCheckbox
              text={
                <p className="flex gap-1 ">
                  I agree to the
                  <Link to="/" className="underline">
                    privacy policy
                  </Link>
                  and
                  <Link to="/" className="underline">
                    terms of use
                  </Link>
                </p>
              }
              type="checkbox"
              name="acceptedTos"
            />
            <Button disabled={isSubmitting}>Create Account</Button>
            <p className="my-2 text-lg text-center">Already got an account? <a href="login"><span className="underline">Login</span></a> </p>
            <OauthButton>
              <FacebookLogo />
              Sign in With Facebook
            </OauthButton>
            <OauthButton>
              <GoogleLogo />
              Sign in with Google
            </OauthButton>
            <OauthButton>Sign in With Apple</OauthButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
