import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import { gender } from "../../api/constants";
import { engineerSchema } from '../../api/schemas/engineerSchemas'
import { getEngineersType, addEngineer } from "../../api/engineers/engineers";
import { getPositionName } from "../../utils/utils";


const onSubmit = (values, actions) => {
  const response = addEngineer(values)
  console.log('response adding', response)
}

const AddEngineer = ({cancel}) => {
  const [engineersType, setEngineersType] = useState([]);

  const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      first_name: "",
      middle_name:"",
      last_name: "",
      address:"",
      email:"",
      contact_num:"",
      engineer_type_id:"",
      salary:0,
      gender:""
    },
    validationSchema: engineerSchema,
    onSubmit
  });

  useEffect(() => {
    const fetchEngineersType = async () => {
      const response = await getEngineersType()
      setEngineersType(response.results)
    };

    fetchEngineersType();
  }, []);

  return (
    <div>
      <h1 className="text-center text-lg">Add Engineer</h1>
      <form onSubmit={handleSubmit} className="add-engineer-form" autoComplete="off">

        <label className="block text-base text-left mt-2" htmlFor="first_name">First Name</label>
        <input className={`${errors.first_name && touched.first_name ? "border-red-900 w-full p-2 border outline-none rounded" : "w-full p-2 border-primaryBlue-300 border outline-none rounded"}`} 
          value={values.first_name}
          onChange={handleChange}
          id="first_name"
          type="text"
          placeholder="First Name"
          onBlur={handleBlur}
        />
        {errors.first_name && touched.first_name && (
          <p className="text-sm text-red-500  mt-1 bg-red-200 p-1 rounded">{errors.first_name}</p>
        )}

        <label className="block text-base text-left mt-2" htmlFor="first_name">Middle Name</label>
        <input className={`${errors.middle_name && touched.middle_name ? "border-red-900 w-full p-2 border outline-none rounded" : "w-full p-2 border-primaryBlue-300 border outline-none rounded"}`}
          value={values.middle_name}
          onChange={handleChange}
          id="middle_name"
          type="text"
          placeholder="Middle Name"
          onBlur={handleBlur}
        />
        {errors.middle_name && touched.middle_name && (
          <p className="text-sm text-red-500  mt-1 bg-red-200 p-1 rounded">{errors.middle_name}</p>
        )}

        <label className="block text-base text-left mt-2" htmlFor="first_name">Last Name</label>
        <input className={`${errors.last_name && touched.last_name ? "border-red-900 w-full p-2 border outline-none rounded" : "w-full p-2 border-primaryBlue-300 border outline-none rounded"}`}
          value={values.last_name}
          onChange={handleChange}
          id="last_name"
          type="text"
          placeholder="Last Name"
          onBlur={handleBlur}
        />
        {errors.last_name && touched.last_name && (
          <p className="text-sm text-red-500  mt-1 bg-red-200 p-1 rounded">{errors.last_name}</p>
        )}

        <label className="block text-base text-left mt-2" htmlFor="salary">Gender</label>
        <select  className={`${errors.gender && touched.gender ? "border-red-900 w-full p-2 border outline-none rounded" : "w-full p-2 border-primaryBlue-300 border outline-none rounded"}`}
          value={values.gender}
          onChange={handleChange}
          id="gender"
          type="text"
          placeholder="Gender"
          onBlur={handleBlur}
        >
          <option defaultValue="" >Select gender</option>
          {gender && gender.map ((item) => 
            <option key={item.code} value={item.code}>{item.name}</option>
          )}
        </select>
        {errors.gender && touched.gender && (
          <p className="text-sm text-red-500  mt-1 bg-red-200 p-1 rounded">{errors.last_name}</p>
        )}

        <label className="block text-base text-left mt-2" htmlFor="first_name">Address</label>
        <input className={`${errors.address && touched.address ? "border-red-900 w-full p-2 border outline-none rounded" : "w-full p-2 border-primaryBlue-300 border outline-none rounded"}`}
          value={values.address}
          onChange={handleChange}
          id="address"
          type="text"
          placeholder="Address"
          onBlur={handleBlur}
        />
        {errors.address && touched.address  && (
          <p className="text-sm text-red-500  mt-1 bg-red-200 p-1 rounded">{errors.address}</p>
        )}

        <label className="block text-base text-left mt-2" htmlFor="first_name">Email</label>
        <input className={`${errors.email && touched.email ? "border-red-900 w-full p-2 border outline-none rounded" : "w-full p-2 border-primaryBlue-300 border outline-none rounded"}`}
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Email"
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="text-sm text-red-500  mt-1 bg-red-200 p-1 rounded">{errors.email}</p>
        )}

        <label className="block text-base text-left mt-2" htmlFor="first_name">Contact Number</label>
        <input className={`${errors.contact_num && touched.contact_num ? "border-red-900 w-full p-2 border outline-none rounded" : "w-full p-2 border-primaryBlue-300 border outline-none rounded"}`}
          value={values.contact_num}
          onChange={handleChange}
          id="contact_num"
          type="text"
          placeholder="Contact Number"
          onBlur={handleBlur}
        />
        {errors.contact_num && touched.contact_num && (
          <p className="text-sm text-red-500  mt-1 bg-red-200 p-1 rounded">{errors.contact_num}</p>
        )}

        <label className="block text-base text-left mt-2" htmlFor="first_name">Job Type</label>
        <select className={`${errors.engineer_type_id && touched.engineer_type_id ? "border-red-900 w-full p-2 border outline-none rounded" : "w-full p-2 border-primaryBlue-300 border outline-none rounded"}`}
          value={values.engineer_type_id}
          onChange={handleChange}
          id="engineer_type_id"
          type="text"
          placeholder="Job Type"
          onBlur={handleBlur}
        >
          <option defaultValue="" >Select Job Type</option>
          {engineersType && engineersType.map((item) => (
            <option key={item.id} value={item.id}>{getPositionName(item.position)}</option>
          ))}
        </select>
        {errors.engineer_type_id && touched.engineer_type_id && (
          <p className="text-sm text-red-500  mt-1 bg-red-200 p-1 rounded">{errors.engineer_type_id}</p>
        )}

        <label className="block text-base text-left mt-2" htmlFor="salary">Salary</label>
        <input className={`${errors.salary && touched.salary ? "border-red-900 w-full p-2 border outline-none rounded" : "w-full p-2 border-primaryBlue-300 border outline-none rounded"}`}
          value={values.salary}
          onChange={handleChange}
          id="salary"
          type="number"
          placeholder="Salary"
          onBlur={handleBlur}
        />
        {errors.salary && touched.salary && (
          <p className="text-sm text-red-500  mt-1 bg-red-200 p-1 rounded">{errors.salary}</p>
        )}

        <div className="flex justify-end mt-5">
          <button className="p-2 m-3 w-20 rounded hover:bg-white-100" onClick={cancel}>Cancel</button>
          <button className="w-20 rounded p-2 m-3 bg-primaryBlue-200 text-white-900 hover:bg-primaryBlue-300" type="submit">Add</button>
        </div>
      </form>
    </div>
  )
};

export default AddEngineer;