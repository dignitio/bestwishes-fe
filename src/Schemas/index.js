import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const Schema = yup.object().shape({
    firstName:yup
        .string()
        .required("Enter your firstname"),
    lastName:yup
        .string()
        .required("Enter your lastname"),
    email: yup
        .string()
        .email("please enter a valid email")
        .required("Please enter a valid email"),
    password: yup
        .string()
        .min(6)
        .matches(passwordRules, { message: "Please Create a Stronger Password" })
        .required("Please enter a valid password"),
    acceptedTos:yup
        .boolean()
        .oneOf([true], "Please accept the terms of service")
});




export default Schema ;

