import { Fragment } from "react"
import React from 'react'
import Header from "../Componets/Header/Header"
import Banner from "../Componets/Banner/Banner"
import Footer from "../Componets/Footer/Footer"
import PlacedStudentsList from "../Componets/PlacedStudents/PlacedStudentsList"

function PlacedStudentsListDetails() {
  return (
    <div>
       <Fragment>
      <Header />
      <Banner />
      <PlacedStudentsList/>
      <Footer/>
    </Fragment>
    </div>
  )
}

export default PlacedStudentsListDetails
