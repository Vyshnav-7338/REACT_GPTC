import { Fragment } from "react"
import React from 'react'
import Header from "../Componets/Header/Header"
import Banner from "../Componets/Banner/Banner"
import CreateCompanie from "../Componets/CreateCompanie/CreateCompanie"
import Footer from "../Componets/Footer/Footer"

function Create() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <CreateCompanie />
      <Footer/>
    </Fragment>
  )
}

export default Create
