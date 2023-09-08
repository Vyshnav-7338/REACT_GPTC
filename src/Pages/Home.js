import React from 'react'
import Header from '../Componets/Header/Header'
import Banner from '../Componets/Banner/Banner'
import PlacementOfficer from '../Componets/PlacementOfficer/PlacementOfficer'
import Companies from '../Componets/Companies/Companies'
import PlacedStudents from '../Componets/PlacedStudents/PlacedStudents'
import Footer from '../Componets/Footer/Footer'
function Home() {
    return (
        <>
            <Header />
            <Banner />
            <PlacementOfficer />
            <Companies />
            <PlacedStudents />
            <Footer />
        </>
    )
}

export default Home
