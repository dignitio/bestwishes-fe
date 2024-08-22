/* eslint-disable import/prefer-default-export */
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const Schema = yup.object().shape({
  firstName: yup.string().required("Enter your firstname"),
  lastName: yup.string().required("Enter your lastname"),
  email: yup.string().email("Please enter a valid email").required("Please enter a valid email"),
  securityQuestion: yup
    .string()
    .oneOf([
      "What is your mother's maiden name?",
      "What was your childhood nickname?",
      "What is your oldest sibling's middle name?",
    ])
    .required("Select a Security Question"),
  securityQuestionAnswer: yup.string().required("Enter Security Question Answer"),
  securityQuestion2: yup
    .string()
    .oneOf([
      "In what city were you born?",
      "What is the name of your favorite sports team?",
      "What is your father's middle name?",
    ])
    .required("Select a Security Question"),
  securityQuestion2Answer: yup.string().required("Enter Security Question Answer"),
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
      description: yup.string().required("please type in a description"),
    }),
  ),
});

export const ProfileSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  profileImage: yup.mixed().required("Profile Image is required"),
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

export const guestWishlist = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      guestName: yup.string().required("please enter your name"),
      guestMail: yup
        .string()
        .email("Please enter a valid email")
        .required("Please enter a valid email"),
      guestAmount: yup.number().required("please enter an amount"),
    }),
  ),
});

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
    .oneOf(
      ["anniversary", "birthday", "convocation", "funeral", "naming", "wedding", "other"],
      "Invalid Category",
    )
    .required("Click here to enter type of tribute"),
  tributeTitle: yup.string().required("Click here to enter Tribute title"),
  fullName: yup.string().required("Click here to enter your name"),
  dateOfBirth: yup.date().nullable().required("Pick a birth date"),
  dateOfDeath: yup.date().nullable(),
  tributeBio: yup
    .string()
    .max(65, "Must Write a Description")
    .required("Please write a description"),
  receiveCash: yup.boolean().oneOf([true, false], "Invalid").required("Please select an option"),
  addWishList: yup.string().oneOf(["Yes", "No"], "Invalid").required("Please select an option"),
  wishlistTitle: yup
    .string()
    .oneOf(
      [
        "john-anniversary",
        "samuel-birthday",
        "temmy-convocation",
        "bernard-funeral",
        "princess-naming",
        "other",
      ],
      "Invalid Category",
    ),
  relationship: yup
    .string()
    .oneOf(["father", "mother", "brother", "sister", "cousin", "other"], "Invalid Category")
    .required("Click here to select your relationship"),
  musicLink: yup.string(),
  publicType: yup
    .string()
    .oneOf(["public", "private"], "Invalid")
    .required("Please select an option"),
  tributeKey: yup.string(),
  otherImages: yup.array().of(
    yup.object().shape({
      firstOtherImg: yup.mixed().required("Image is required"),
      secondOtherImg: yup.mixed(),
      thirdOtherImg: yup.mixed(),
      fourthOtherImg: yup.mixed(),
    }),
  ),
});

export const editTributeSchema = yup.object().shape({
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
    .oneOf(
      ["anniversary", "birthday", "convocation", "funeral", "naming", "wedding", "other"],
      "Invalid Category",
    )
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
  musicLink: yup.string(),
  publicType: yup
    .string()
    .oneOf(["public", "private"], "Invalid")
    .required("Please select an option"),
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

export const editWishcardLibrarySchema = yup.object().shape({
  centerImage: yup.mixed().test("file", "Please upload an Image", (value) => {
    if (!value || !value.type.startsWith("image/")) {
      return false;
    }
    return true;
  }),
});
