import Button from "components/Button";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { Schema } from "Schemas";
import React from "react";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomSelect from "components/CustomFormInputs/CustomSelect";
import CustomCheckbox from "components/CustomFormInputs/CustomCheckbox";
import OauthButton from "components/Button/OauthButton";
import { ReactComponent as FacebookLogo } from "../../assets/icons/facebook.svg";
import { ReactComponent as GoogleLogo } from "../../assets/icons/google.svg";
import { ReactComponent as AppleLogo } from "../../assets/icons/apple-logo.svg";

const onSubmit = async (values) => {
  console.log(values);
};

function Register() {
  return (
    <div className="flex flex-col gap-10">
      <span className="w-full text-center text-2xl font-medium uppercase ">
        Create Your Account
      </span>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          acceptedTos: false,
          securityQuestion: "",
          securityQuestionAnswer: "",
          securityQuestion2: "",
          securityQuestion2Answer: "",
        }}
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

            <CustomSelect
              label="Security Questions"
              name="securityQuestion"
              placeholder="Click here to select Security Question"
            >
              <option value="">Click here to select a Security Question</option>
              <option value="What is your mother's maiden name?">
                What is your mother&apos;s maiden name?
              </option>
              <option value="What was your childhood nickname?">
                What was your childhood nickname?
              </option>
              <option value="What is your oldest sibling's middle name?">
                What is your oldest sibling&apos;s middle name?
              </option>
            </CustomSelect>
            <CustomInput
              label="Security Question Answer"
              name="securityQuestionAnswer"
              type="text"
              placeholder="Enter Security Question Answer"
            />
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
            <Button disabled={isSubmitting} className=" text-white">
              Create Account
            </Button>
            <p className="my-2 text-lg text-center">
              Already got an account?{" "}
              <Link to="/login">
                <span className="underline">Login</span>
              </Link>{" "}
            </p>
            <OauthButton>
              <FacebookLogo />
              Sign in With Facebook
            </OauthButton>
            <OauthButton>
              <GoogleLogo />
              Sign in with Google
            </OauthButton>
            <OauthButton>
              <AppleLogo />
              Sign in With Apple
            </OauthButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
