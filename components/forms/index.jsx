"use client";

import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { FormSchema } from "./schema";
import styles from './styles.module.css'

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

const Form = () => {
  const form = useRef();
  const[check,setCheck]=useState(false);
  const[warning,setWarning]=useState(null)

  let { values, handleBlur, handleChange, handleSubmit, touched, errors,resetForm } =
    useFormik({
      initialValues,
      validationSchema: FormSchema,
      onSubmit: (values, { resetForm }) => {
        if(check===true)
          {
            emailjs
            .sendForm("service_1loqh9x", "template_i3926w6", form.current, {
              publicKey: "ltjL7aEP5LrX-18Wq",
            })
            .then(
              () => {
                resetForm();
                setCheck(false);
                setWarning(null);
              },
              (error) => {
                console.log("FAILED...", error.text);
              }
            );
          }
          else{
            setWarning("please accept the terms and conditions")
          }
      },
    });


  return (
    <form id="enquiry" className={styles.enquiryForm } onSubmit={handleSubmit} ref={form}>
      <div className={styles.inputBlock}>
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
      <div className={styles.inputBlock}>
        <label htmlFor="name">
          Phone Number <span>*</span>
        </label>
        <input
          type="text"
          autoComplete="off"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="name">
          Company Name <span>*</span>
        </label>
        <input
          type="text"
          autoComplete="off"
          name="company"
          value={values.company}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.company && touched.company ? <p>{errors.company}</p> : null}
      </div>
      <div className={styles.inputBlock}>
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
      <div className={styles.inputBlock}>
        <label htmlFor="name">
          Message <span>*</span>
        </label>
        <textarea
          autoComplete="off"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div style={{display:'flex',alignItems:'center',gap:'1rem',marginTop:'0.5rem'}}>
          <input type="checkbox" checked={check} onChange={(e)=>{setCheck(e.target.checked)}} />
          <p>
            I confirm, I have read and agreed to Privacy Policy and consent to
            sharing my information. For more information, please review our
            Cookies Policy and Privacy Statement.
          </p>
        </div>
        {(check!==true && warning!==null) && <p>{warning}</p>}
      </div>
      <div>
        <button onClick={resetForm} type="button" className={styles.btn} style={{background:'var(--gray)'}}>RESET</button>
        <button type="submit" className={styles.btn} style={{background:'var(--orange)'}}>SUBMIT</button>
      </div>
    </form>
  );
};

export default Form;
