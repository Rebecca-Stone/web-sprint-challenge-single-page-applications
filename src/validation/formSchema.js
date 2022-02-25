import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Your name is required")
    .min(2, "Name must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(["Small", "Medium", "Large"], "Pizza size is required"),
  pepperoni: yup.boolean(),
  cheese: yup.boolean(),
  olives: yup.boolean(),
  peppers: yup.boolean(),
  special: yup
    .string()
    .max(30, 'too long')
});

export default schema;
