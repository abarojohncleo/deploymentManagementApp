import * as yup from "yup";

export const engineerSchema = yup.object().shape({
  first_name: yup.string().max(100).required("Required"),
  middle_name: yup.string().max(100),
  last_name: yup.string().max(100).required("Required"),
  address: yup.string().max(100),
  email:yup.string().email("Please enter a valid email").required("Required"),
  contact_num: yup.string().max(100).required("Required"),
  engineer_type_id: yup.number().required("Required"),
  salary: yup.number().positive().integer().required("Required"),
  gender: yup.string().max(5).required("Required"),
})