import { Fragment } from "react"
import React from 'react'
import Header from "../Componets/Header/Header"
import Banner from "../Componets/Banner/Banner"
import Footer from "../Componets/Footer/Footer"
import AllCompaniesDetails from "../Componets/Companies/AllCompaniesDetails"
function AllCompaniesList() {
  return (
    <div>
      <Fragment>
      <Header />
      <Banner />
      <AllCompaniesDetails/>
      <Footer/>
    </Fragment>
    </div>
  )
}

export default AllCompaniesList
