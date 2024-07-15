"use client";
import Banner from "@/components/banner";
import { aboutBanner } from "@/public";
import React from "react";
import {  FieldArray, Formik,} from "formik";
import * as yup from "yup";
import { newWork } from "@/services/workservice";

const initialValues = {
  heading: "",
  banner: "",
  industry: "",
  services: "",
  overviewDescription: "",
  overviewPicture: "",
  benifitsPicture: "",
  benifitList: [""],
  challenges: [{ picturePath: "", content: "" }],
  challengePictures: [],
};

const FormSchema = yup.object({
  heading: yup.string().required("Please enter heading of work"),
  industry: yup.string().required("Please enter industries related to work"),
  services: yup.string().required("Please enter services related to work"),
  banner: yup.string().required("enter banner picture"),
  overviewDescription: yup.string().required("enter overview description"),
});

const page = () => {
  const formSubmit = async(values, { resetForm }) => {
    const formdata = new FormData();
    // const overview = {
    //   description: values.overviewDescription,
    //   picturePath: values.overviewPicture.name,
    // };
    // const benifits = {
    //   picturePath: values.benifitsPicture.name,
    //   benifitList: values.benifitList,
    // };
    // formdata.append("overview", JSON.stringify(overview));
    // formdata.append("benifits", JSON.stringify(benifits));
    for (let value in values) {
      formdata.append(value, values[value]);
    }
    for (let index = 0; index < values.challengePictures.length; index++) {
      values.challenges[index].picturePath =
        values.challengePictures[index]?.item(0)?.name;
    }
    console.log(values.challenges);
    formdata.append("bannerPath", values["banner"]["name"]);
    formdata.append("challenges", JSON.stringify(values.challenges));
    console.log("challenges",formdata.get("challenges"));
    for (const value of formdata.keys()) {
      console.log(value, formdata.get(value));
    }
    // const newwork=await newWork({pictures:values["pictures"],formdata})
    // console.log(newwork);
  };
  return (
    <div>
      <Banner image={aboutBanner} heading="New-Work" height="560px" />
      <div className="wrapper page-heading">
        <p>New-work</p>
      </div>
      <div className="wrapper padding-block">
        <div className="wrapper padding-block admin-form-container">
          <Formik
            initialValues={initialValues}
            validationSchema={FormSchema}
            onSubmit={formSubmit}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              resetForm,
              touched,
              values,
              errors,
              setFieldValue,
            }) => (
              <form className="enquiryForm" onSubmit={handleSubmit}>
                <div className="inputBlock">
                  <label htmlFor="heading">
                    Heading <span>*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="heading"
                    value={values.heading}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.heading && touched.heading ? (
                    <p>{errors.heading}</p>
                  ) : null}
                </div>
                <div className="inputBlock">
                  <label htmlFor="heading">
                    Select Banner Image (1920 * 560) <span>*</span>
                  </label>
                  <input
                    type="file"
                    name="banner"
                    autoComplete="off"
                    onChange={(e) => {
                      setFieldValue("banner", e.target.files[0]);
                    }}
                  />
                  {errors.banner && touched.banner ? (
                    <p>{errors.banner}</p>
                  ) : null}
                </div>
                <FieldArray
                  name="challenges"
                  render={({ remove, insert, push }) => (
                    <div className="benifits-point-container">
                      {values.challenges.length > 0 &&
                        values.challenges.map((challenge, index) => (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              border: "1px dotted gray",
                              padding: "1.5rem",
                            }}
                          >
                            <div className="inputBlock">
                              <label htmlFor="heading">
                                Select Challenge Svg <span>*</span>
                              </label>
                              <input
                                type="file"
                                name="challengePictures"
                                autoComplete="off"
                                onChange={(e) => {
                                  setFieldValue("challengePictures", [
                                    ...values.challengePictures,
                                    e.target.files,
                                  ]);
                                }}
                                multiple
                              />
                              {errors.benifitsPicture &&
                              touched.benifitsPicture ? (
                                <p>{errors.benifitsPicture}</p>
                              ) : null}
                            </div>
                            <div
                              className="inputBlock"
                              style={{ flexGrow: "1" }}
                            >
                              <label htmlFor={`challenges.${index}.content`}>
                                Challenge Point <span>*</span>
                              </label>
                              <input
                                type="text"
                                value={values.challenges[index].content}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name={`challenges.${index}.content`}
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                remove(index);
                              }}
                              style={{
                                border: "1px solid black",
                                padding: "0.5rem 1rem",
                                borderRadius: "25px",
                                fontWeight: "600",
                              }}
                            >
                              delete
                            </button>
                          </div>
                        ))}
                      <button
                        type="button"
                        onClick={() => {
                          push({ picturePath: "", content: "" });
                        }}
                        className="btn"
                        style={{
                          background: "var(--orange)",
                          marginTop: "1rem",
                        }}
                      >
                        Add Point
                      </button>
                    </div>
                  )}
                />
                <div className="inputBlock">
                  <label htmlFor="name">
                    Industries <span>*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="industry"
                    value={values.industry}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.industry && touched.industry ? (
                    <p>{errors.industry}</p>
                  ) : null}
                </div>
                <div className="inputBlock">
                  <label htmlFor="name">
                    Services <span>*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="services"
                    value={values.services}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.services && touched.services ? (
                    <p>{errors.services}</p>
                  ) : null}
                </div>
                <div className="inputBlock">
                  <label htmlFor="heading">
                    Select Overview Image <span>*</span>
                  </label>
                  <input
                    type="file"
                    name="overviewPicture"
                    autoComplete="off"
                    onChange={(e) => {
                      setFieldValue("overviewPicture", e.target.files[0]);
                    }}
                  />
                  {errors.overviewPicture && touched.overviewPicture ? (
                    <p>{errors.overviewPicture}</p>
                  ) : null}
                </div>
                <div className="inputBlock">
                  <label htmlFor="heading">
                    Overview Description <span>*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="overviewDescription"
                    value={values.overviewDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.overviewDescription && touched.overviewDescription ? (
                    <p>{errors.overviewDescription}</p>
                  ) : null}
                </div>
                <div className="inputBlock">
                  <label htmlFor="heading">
                    Select Benifits Image <span>*</span>
                  </label>
                  <input
                    type="file"
                    name="benifitsPicture"
                    autoComplete="off"
                    onChange={(e) => {
                      setFieldValue("benifitsPicture", e.target.files[0]);
                    }}
                  />
                  {errors.benifitsPicture && touched.benifitsPicture ? (
                    <p>{errors.benifitsPicture}</p>
                  ) : null}
                </div>
                <FieldArray
                  name="benifitList"
                  render={({ remove, insert, push }) => (
                    <div className="benifits-point-container">
                      {values.benifitList.length > 0 &&
                        values.benifitList.map((benifit, index) => (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              border: "1px dotted gray",
                              padding: "1.5rem",
                            }}
                          >
                            <div
                              className="inputBlock"
                              style={{ flexGrow: "1" }}
                            >
                              <label htmlFor={`benifitList.${index}`}>
                                Benifits Point <span>*</span>
                              </label>
                              <input
                                type="text"
                                value={values.benifitList[index]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name={`benifitList.${index}`}
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                remove(index);
                              }}
                              style={{
                                border: "1px solid black",
                                padding: "0.5rem 1rem",
                                borderRadius: "25px",
                                fontWeight: "600",
                              }}
                            >
                              delete
                            </button>
                          </div>
                        ))}
                      <button
                        type="button"
                        onClick={() => {
                          push("");
                        }}
                        className="btn"
                        style={{
                          background: "var(--orange)",
                          marginTop: "1rem",
                        }}
                      >
                        Add Point
                      </button>
                    </div>
                  )}
                />
                <button
                  onClick={resetForm}
                  type="button"
                  className="btn"
                  style={{ background: "var(--gray)" }}
                >
                  RESET
                </button>
                <button
                  type="submit"
                  className="btn"
                  style={{ background: "var(--orange)" }}
                >
                  SUBMIT
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default page;
