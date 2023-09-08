import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateCompanie.css'

import{ FirebaseContext} from '../../store/FirebaseContext'

function SignUp() {
  const [companiename, setCompanieName] = useState('')
  const [HRname, setHRName] = useState('')
  const [mail, setmail] = useState('')
  const [details, setDetails] = useState('')
  const [image, setimage] = useState()
  const {firebase} =useContext(FirebaseContext)
  const date =new Date()
  const Navigate = useNavigate()

  // const handleSubmit = () => {
  //   // Navigate('/404page')

  // }
  const handleSubmit=()=>{
    firebase.storage().ref(`/CompaniesImage/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        // console.log(url)
        firebase.firestore().collection('Companies').add({
          companiename,
          HRname,
          mail,
          details,
          url,
          createdAt:date.toDateString()
        })
        Navigate('/')
      })
    })
}
  return (
    <div className="signupParentDiv">

      <label htmlFor="Cname">Companie Name</label>
      <br />
      <input
        className="input"
        type="text"
        value={companiename}
        onChange={(e) => setCompanieName(e.target.value)}
        id="cname"
        name="cname"
        placeholder='Enter Companie Name'
      />
      <br />
      <label htmlFor="HRname">HRname</label>
      <br />
      <input
        className="input"
        type="text"
        value={HRname}
        onChange={(e) => setHRName(e.target.value)}
        id="HRname"
        name="HRname"
        placeholder='Enter HR Name'
      />
      <br />
      <label htmlFor="fname">Email</label>
      <br />
      <input
        className="input"
        type="email"
        value={mail}
        onChange={(e) => setmail(e.target.value)}
        id="fname"
        name="email"
        placeholder='Enter Companies Mail Id'
      />
      <br />
      <label htmlFor="fname">Details</label>
      <br />
      <textarea
        className='textarea'
        id='details'
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        rows={5}
        cols={83}
        name='details'
        placeholder='Enter Details of Companines'
      />
      <br />

      <br />
      <img className="input" alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} ></img>

      <br />
      <input className="input" onChange={(e) => {
        setimage(e.target.files[0])
      }} type="file" />
      <br />
      <button className="uploadBtn" onClick={handleSubmit} >upload and Submit</button>



    </div>
  )
}

export default SignUp
