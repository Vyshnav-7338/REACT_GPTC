import React from "react";
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Create from './Pages/CreateCompaniesDetails'
import Error from "./Error/Error";
import PageNotFound from "./404page/PageNotFound";
import AllCompaniesList from "./Pages/AllCompaniesList";
import StudentsDetailsList from "./Pages/StudentsDetailsList";
import RegistationStudentsForm from "./Pages/RegistationStudentsForm";
import PlacedStudentsListDetails from "./Pages/PlacedStudentsListDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CreateCompanies" element={<Create/>} />
      <Route path="/404page" element={<Error />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/Vyshnav-7338/GPTC_React.git" element={<Home />} />
      <Route path="/allCompaniesList" element={<AllCompaniesList/>}/>
      <Route path="/RegisterStudents" element={<RegistationStudentsForm/>}/>
      <Route path="/StudentsList" element={<StudentsDetailsList/>}/>
      <Route path="/PlacedStudentsList" element={<PlacedStudentsListDetails/>}/>

    </Routes>

  );
}

export default App;
