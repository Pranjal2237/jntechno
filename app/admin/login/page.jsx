"use client"
import Banner from '@/components/banner'
import { loginBanner } from '@/public'
import React from 'react'
import { useFormik } from "formik";
import * as yup from 'yup'
import { userLogin } from '@/services/userServices';
import { userAppContext } from '@/context/userContext';
import { useRouter } from 'next/navigation';


const initialValues = {
    name: "",
    email: "",
    password: "",
    position: "",
  };

  const FormSchema=yup.object({
    name:yup.string().min(2).required('Please enter your name'),
    email:yup.string().email().required('Please enter your email'),
    password:yup.string().required('Please enter your password'),
    position:yup.string().required('Please select your position')
})

const page = () => {

  const [user,setUser]=userAppContext();
  const {adminType,haveLogin}=user;
  const router=useRouter();
    let { values, handleBlur, handleChange, handleSubmit, touched, errors,resetForm } =
    useFormik({
      initialValues,
      validationSchema: FormSchema,
      onSubmit: async(values, { resetForm }) => {
        const user=await userLogin(values);
        sessionStorage.setItem("token",user.token)
        setUser({adminType:"",haveLogin:true})
        resetForm();
        router.push("/");
      },
    });
  return (
    <div>
        <Banner
        image={loginBanner}
        heading="Admin Login"
        height="560px"
      />
      <div className="wrapper page-heading">
          <p
          >
            Admin-Login
          </p>
        </div>
        <div className='wrapper padding-block'>
        <div className='wrapper padding-block admin-form-container'>
        <form className='enquiryForm' onSubmit={handleSubmit} >
      <div className='inputBlock'>
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input
          type="text"
          autoComplete="off"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? <p>{errors.name}</p> : null}
      </div>
      <div className='inputBlock'>
        <label htmlFor="name">
          Work Email <span>*</span>
        </label>
        <input
          type="text"
          autoComplete="off"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? <p>{errors.email}</p> : null}
      </div>
      <div className='inputBlock'>
        <label htmlFor='name'>
            Position <span>*</span>
        </label>
        <select name='position' value={values.position} onChange={handleChange} onBlur={handleBlur}>
            <option>--select--</option>
            <option>SuperAdmin</option>
            <option>Admin</option>
        </select>
        {errors.position && touched.position ? <p>{errors.position}</p> : null}
      </div>
      <div className='inputBlock'>
        <label htmlFor="name">
          Password <span>*</span>
        </label>
        <input
          type="password"
          autoComplete="off"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? <p>{errors.password}</p> : null}
      </div>
        <button onClick={resetForm} type="button" className='btn' style={{background:'var(--gray)'}}>RESET</button>
        <button type="submit" className='btn' style={{background:'var(--orange)'}}>SUBMIT</button>
    </form>
    </div>
        </div>
    </div>
  )
}

export default page