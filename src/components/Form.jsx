import React from "react";
import { Formik } from "formik";
import axios from "axios";
import "./form.scss";

export const Form = () => {
  const formValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "pop",
    message: "",
  };

  const validateForm = (values) => {
    const errors = {};
    // console.log(values);
    if (!values.email) {
      errors.email = "Need to fill";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.firstName) {
      errors.firstName = "Need to fill";
    } else if (values.firstName.length <= 3 || values.firstName.length >= 15) {
      errors.firstName = "Not smaller 3 and not longer 15";
    }

    if (!values.lastName) {
      errors.lastName = "Need to fill";
    } else if (values.lastName.length <= 3 || values.lastName.length >= 15) {
      errors.lastName = "Not smaller 3 and not longer 15";
    }

    if (!values.password) {
      errors.password = "Need to fill";
    } else if (values.password.length <= 3 || values.password.length >= 15) {
      errors.password = "Not smaller 3 and not longer 15";
    }

    return errors;
  };

  const onSubmit = async (values, { setErrors, resetForm }) => {
    // console.log(values);
    const headers = new Headers();
    await axios
      .post(
        "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration",
        values,
        headers
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        const errorResponse = error.response.data;
        setErrors({ email: errorResponse.message.en });
      });
    resetForm({});
  };

  return (
    <div className="contacts">
      <div className="form">
        <div className="form__wrapper">
          <h2 className="form__tittle">JUST ASK US ANYTHING</h2>
          <Formik
            initialValues={formValues}
            validate={(values) => validateForm(values)}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form className="form__feedback" onSubmit={handleSubmit}>
                <div className="form__data">
                  <div className="form__item ">
                    <label className="form__label">
                      First Name:
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder="Enter your First Name"
                      />
                    </label>
                    <span className="error">
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </span>
                  </div>

                  <div className="form__item ">
                    <label className="form__label">
                      Last Name:
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder="Enter your Last Name"
                      />
                    </label>
                    <span className="error">
                      {errors.lastName && touched.lastName && errors.lastName}
                    </span>
                  </div>

                  <div className="form__item ">
                    <label className="form__label">
                      Email:
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Enter your Email"
                      />
                    </label>
                    <span className="error">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>

                  <div className="form__item">
                    <label className="form__label">
                      Password:
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Enter your Password"
                      />
                    </label>
                    <span className="error">
                      {errors.password && touched.password && errors.password}
                    </span>
                  </div>

                  <div className="form__item form__item--message">
                    <label className="form__label">
                      Message:
                      <textarea
                        type="text"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        placeholder="Enter your message"
                      />
                    </label>
                  </div>
                </div>
                <button
                  className="form__submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
