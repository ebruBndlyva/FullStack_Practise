import React, { useEffect } from 'react'
import style from "./style.module.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'

import { useCountryPostDataMutation, useGetCountryDataQuery } from '../../Redux/services/CountryApi';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Add() {



  const [CountryPostData] = useCountryPostDataMutation()

  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      country: "",
      title: "",
      description: "",
      image: ""
    },
    validationSchema: Yup.object({
      country: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      title: Yup.string()
        .min(20, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
      description: Yup.string()
        .min(20, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),

      image: Yup.string()
        .url()
        .required('Required'),

    }),
    onSubmit: async values => {
      await CountryPostData(values)
      Swal.fire({
        title: "Success!",
        text: "Your product has been added successfully.",
        icon: "success",
        confirmButtonText: "OK",
      })
      navigate("/");
    },
  });

  return (


    <div className='content'>
        <Helmet>
        <title>Add</title>
      </Helmet>
      <div className={style.add_form}>

        <form className={style.form} onSubmit={formik.handleSubmit}>
          <label htmlFor="country">Country Name</label>
          <input
            id="country"
            name="country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.country}

          />
          {formik.touched.country && formik.errors.country && (
            <div className='error'>{formik.errors.country}</div>

          )}
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <div className='error'>{formik.errors.title}</div>

          )}
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <div className='error'>{formik.errors.description}</div>

          )}

          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image && (
            <div className='error'>{formik.errors.image}</div>

          )}
          <div className={style.form_btn}>  <button className='btn btn-success' type="submit">Add</button></div>
        </form>
      </div>
    </div>

  )
}

export default Add