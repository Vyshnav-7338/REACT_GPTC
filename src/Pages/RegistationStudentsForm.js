import React from 'react'
import RegisterStudents from '../Componets/RegisterStudents/RegisterStudents'
import { Fragment } from "react"
import Header from "../Componets/Header/Header"
import Banner from "../Componets/Banner/Banner"
import Footer from "../Componets/Footer/Footer"
function RegistationStudentsForm() {
  return (
    <div>
      <Fragment>
      <Header />
      <Banner />
      <RegisterStudents />
      <Footer/>
    </Fragment>
    </div>
  )
}

export default RegistationStudentsForm
