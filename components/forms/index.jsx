"use client";

import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { FormSchema } from "./schema";
import "../../styles/global.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

const Form = () => {
  const [code, setCode] = useState();
  const [codeinput, setCodeInput] = useState("");
  const [check, setCheck] = useState();
  const [canSubmit, setCanSubmit] = useState(false);
  const [action, setAction] = useState("Submit");
  const form = useRef();

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues,
      validationSchema: FormSchema,
      onSubmit: (values, { resetForm }) => {
        if (canSubmit === true) {
          setAction("Submitting...");
          emailjs
            .sendForm("service_fjcmugf", "template_kfdqsha", form.current, {
              publicKey: "COLQvudnCYH01N07-",
            })
            .then(
              () => {
                setAction("Submitted");
                setTimeout(() => {
                  setAction("Submit");
                }, 1000);
                setCodeInput(" ");
                resetForm();
              },
              (error) => {
                console.log("FAILED...", error.text);
              }
            );
        }
      },
    });

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} ref={form}>
      <div className="input-block">
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
      <div className="input-block">
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
      <div className="input-block">
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
      <div className="input-block">
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
      <div className="input-block">
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
          <input type="checkbox" />
          <p>
            I confirm, I have read and agreed to Privacy Policy and consent to
            sharing my information. For more information, please review our
            Cookies Policy and Privacy Statement.
          </p>
        </div>
      </div>
      <div>
        <button className="btn gray">RESET</button>
        <button className="btn orange">SUBMIT</button>
      </div>
    </form>
  );
};

export default Form;
