/* eslint-disable import/prefer-default-export */
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const Schema = yup.object().shape({
  firstName: yup.string().required("Enter your firstname"),
  lastName: yup.string().required("Enter your lastname"),
  email: yup.string().email("Please enter a valid email").required("Please enter a valid email"),
  wishListTitle: yup.string().required("Click here to enter Wishlist title"),
  wishListCategory: yup
    .string()
    .oneOf(["birthdays", "anniversary", "burials", "other"], "Invalid Category")
    .required("Click here to enter type of tribute"),
  wishListDescription: yup
    .string()
    .max(65, "Must Write a Description")
    .required("Please write a description"),
  wishListDate: yup.date().nullable().required("Pick a date"),
  coverImage: yup
    .mixed()
    .test("file", "Please upload an Image", (value) => {
      if (!value || !value.type.startsWith("image/")) {
        return false;
      }
      return true;
    })
    .required("Please upload an Image"),
  secondCoverImage: yup
    .mixed()
    .test("file", "Please upload an Image", (value) => {
      if (!value || !value.type.startsWith("image/")) {
        return false;
      }
      return true;
    })
    .required("Please upload an Image"),
  itemName: yup.string().required("Click here to enter an Item Name"),
  price: yup
    .number()
    .required("Please enter a price")
    .positive("Price must be a positive number")
    .typeError("Price must be a number"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please Create a Stronger Password" })
    .required("Please enter a valid password"),
  acceptedTos: yup.boolean().oneOf([true], "Please accept the terms of service"),
});
