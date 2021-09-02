import React from "react";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      checkpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be minimum 2 characters")
        .required("Must be minimum 2 characters"),
      surname: Yup.string()
        .min(3, "Must be min 3 characters")
        .required("Must be min 3 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Invalid email address"),
      password: Yup.string()
        .email("Invalid email address")
        .required("Invalid email address"),
      checkpassword: Yup.string()
        .email("Invalid email address")
        .required("Invalid email address"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  //   Submitting
  const submitReg = (data) => {
    console.log(data);
    // loadToServ(data);
  };

  //   POSTING DATA
  const loadToServ = async (personData) => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(personData),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjcwZDJkNTI2MjAwMTViNmRjOTkiLCJpYXQiOjE2Mjk5ODUyNzMsImV4cCI6MTYzMTE5NDg3M30.XnwP2w8HYgNw7WtHh0tP8haV9jofgQ_UQ9xJOsb01C4",
        },
      });
      if (response.ok) {
        let data = response.json();
        console.log("Succes");
      } else {
        console.log("Error happend 400 or 500");
      }
    } catch (error) {}
  };
  //   RETURN
  return (
    <div className="w-50 mx-auto my-3">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="nameInput">
          <Form.Label className="ml-3">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="...name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}{" "}
        </Form.Group>
        <Form.Group controlId="surnameInput">
          <Form.Label className="ml-3">Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="...surname"
            name="surname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
          />
          {formik.touched.surname && formik.errors.surname ? (
            <div>{formik.errors.surname}</div>
          ) : null}{" "}
        </Form.Group>
        <Form.Group controlId="emailInput">
          <Form.Label className="ml-3">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="...email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}{" "}
        </Form.Group>
        <Form.Group controlId="passInput">
          <Form.Label className="ml-3">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="...password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}{" "}
        </Form.Group>
        <Form.Group controlId="passInputCheck">
          <Form.Label className="ml-3">Repeat the password</Form.Label>
          <Form.Control
            type="password"
            placeholder="...password"
            name="checkpassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.checkpassword}
          />
          {formik.touched.checkpassword && formik.errors.checkpassword ? (
            <div>{formik.errors.checkpassword}</div>
          ) : null}{" "}
        </Form.Group>
        <hr />
        <Button type="submit" variant="info">
          Register
        </Button>
      </Form>
    </div>
  );
}
