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
<<<<<<< HEAD
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
=======
>>>>>>> 10b22ca7dbc3551aaf81568dc349536658fb5b65
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

<<<<<<< HEAD
export const tributeSchema = yup.object().shape({
  headerImage: yup
    .mixed()
    .test("file", "Please upload an Image", (value) => {
      if (!value || !value.type.startsWith("image/")) {
        return false;
      }
      return true;
    })
    .required("Please upload an Image"),
  tributeType: yup
    .string()
    .oneOf(["anniversary", "birthday", "convocation", "funeral", "naming", "wedding", "other"], "Invalid Category")
    .required("Click here to enter type of tribute"),
  tributeTitle: yup.string().required("Click here to enter Tribute title"),
  fullName: yup.string().required("Click here to enter your name"),
  dateOfBirth: yup.date().nullable().required("Pick a birth date"),
  dateOfDeath: yup.date().nullable(),
  tributeBio: yup
    .string()
    .max(65, "Must Write a Description")
    .required("Please write a description"),
  receiveCash: yup
    .boolean()
    .oneOf([true, false], "Invalid")
    .required('Please select an option'),
  addWishList: yup
    .string()
    .oneOf(['Yes', 'No'], 'Invalid')
    .required('Please select an option'),
  relationship: yup
    .string()
    .oneOf(["father", "mother", "brother", "sister", "cousin", "other"], "Invalid Category")
    .required("Click here to select your relationship"),
  musicLink: yup.string().required("Click here to enter your music"),
  publicType: yup
    .string()
    .oneOf(['public', 'private'], 'Invalid')
    .required('Please select an option'),
  tributeKey: yup.string(),
  otherImages: yup.array().of(
    yup.object().shape({
      firstOtherImg: yup.mixed().required("Image is required"),
      secondOtherImg: yup.mixed(),
      thirdOtherImg: yup.mixed(),
      fourthOtherImg: yup.mixed(),
=======
export const AddItemsSchema2 = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      img: yup.mixed().required("Image is required"),
      itemName: yup.string().required("please enter an item name "),
      price: yup.number().required("please enter an amount"),
>>>>>>> 10b22ca7dbc3551aaf81568dc349536658fb5b65
    }),
  ),
});

<<<<<<< HEAD

export const editTributeSchema = yup.object().shape({
  headerImage: yup
=======
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
>>>>>>> 10b22ca7dbc3551aaf81568dc349536658fb5b65
    .mixed()
    .test("file", "Please upload an Image", (value) => {
      if (!value || !value.type.startsWith("image/")) {
        return false;
      }
      return true;
    })
    .required("Please upload an Image"),
<<<<<<< HEAD
  tributeType: yup
    .string()
    .oneOf(["anniversary", "birthday", "convocation", "funeral", "naming", "wedding", "other"], "Invalid Category")
    .required("Click here to enter type of tribute"),
  tributeTitle: yup.string().required("Click here to enter Tribute title"),
  fullName: yup.string().required("Click here to enter your name"),
  dateOfBirth: yup.date().nullable().required("Pick a birth date"),
  dateOfDeath: yup.date().nullable().required("Pick a death date"),
  tributeBio: yup
    .string()
    .max(65, "Must Write a Description")
    .required("Please write a description"),
  relationship: yup
    .string()
    .oneOf(["father", "mother", "brother", "sister", "cousin", "other"], "Invalid Category")
    .required("Click here to select your relationship"),
  musicLink: yup.string().required("Click here to enter your music"),
  publicType: yup
    .string()
    .oneOf(['public', 'private'], 'Invalid')
    .required('Please select an option'),
  tributeKey: yup.string(),
  otherImages: yup.array().of(
    yup.object().shape({
      firstOtherImg: yup.mixed().required("Image is required"),
      secondOtherImg: yup.mixed().required("Image is required"),
      thirdOtherImg: yup.mixed().required("Image is required"),
      fourthOtherImg: yup.mixed().required("Image is required"),
    }),
  ),
});
=======
  items: yup.array().of(
    yup.object().shape({
      img: yup.mixed().required("Image is required"),
      itemName: yup.string().required("please enter an item name "),
      price: yup.number().required("please enter an amount"),
    }),
  ),
});
>>>>>>> 10b22ca7dbc3551aaf81568dc349536658fb5b65
