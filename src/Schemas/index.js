/* eslint-disable import/prefer-default-export */
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const Schema = yup.object().shape({
  firstName: yup.string().required("Enter your firstname"),
  lastName: yup.string().required("Enter your lastname"),
  email: yup.string().email("Please enter a valid email").required("Please enter a valid email"),
  secondCoverImage: yup
    .mixed()
    .test("file", "Please upload an Image", (value) => {
      if (!value || !value.type.startsWith("image/")) {
        return false;
      }
      return true;
    })
    .required("Please upload an Image"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please Create a Stronger Password" })
    .required("Please enter a valid password"),
  acceptedTos: yup.boolean().oneOf([true], "Please accept the terms of service"),
});

export const AddItemsSchema = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      img: yup.mixed().required("Image is required"),
      itemName: yup.string().required("please enter an item name "),
      price: yup.number().required("please enter an amount"),
    }),
  ),
});

export const AddItemsSchema2 = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      img: yup.mixed().required("Image is required"),
      itemName: yup.string().required("please enter an item name "),
      price: yup.number().required("please enter an amount"),
    }),
  ),
});

export const wishlistSchema = yup.object().shape({
  wishListCategory: yup
    .string()
    .oneOf(["birthdays", "anniversary", "burials", "other"], "Invalid Category")
    .required("Click here to enter type of tribute"),
  wishListTitle: yup.string().required("Click here to enter Wishlist title"),
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
  items: yup.array().of(
    yup.object().shape({
      img: yup.mixed().required("Image is required"),
      itemName: yup.string().required("please enter an item name "),
      price: yup.number().required("please enter an amount"),
    }),
  ),
});
