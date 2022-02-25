import * as yup from "yup";

//this is what validates the inputs
const schema = yup.object().shape({
  //name is required and has to be more than two characters
  name: yup
    .string()
    .trim()
    .required("Your name is required")
    .min(2, "name must be at least 2 characters"),
  //size is required and has to be one of the dropdown options
  size: yup
    .string()
    .oneOf(["Small", "Medium", "Large"], "Pizza size is required"),
  //the toppings and special instructions are not required
  pepperoni: yup.boolean(),
  cheese: yup.boolean(),
  olives: yup.boolean(),
  peppers: yup.boolean(),
  special: yup.string().max(30, "too long"),
});

export default schema;
