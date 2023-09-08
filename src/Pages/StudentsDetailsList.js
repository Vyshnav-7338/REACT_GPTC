import { Fragment } from "react"
import React from 'react'
import Header from "../Componets/Header/Header"
import Banner from "../Componets/Banner/Banner"
import Footer from "../Componets/Footer/Footer"
import StudentsList from "../Componets/StudentsList/StudentsList"
function StudentsDetailsList() {
  return (
    <div>
       <Fragment>
      <Header />
      <Banner />
      <StudentsList/>
      <Footer/>
    </Fragment>
    </div>
  )
}

export default StudentsDetailsList
