import React, { useContext, useState } from 'react'
import './RegisterStudents.css'
import { FirebaseContext } from '../../store/FirebaseContext'
import { useNavigate } from 'react-router-dom'
function RegisterStudents() {
    const { firebase } = useContext(FirebaseContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [mail, setmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cgpa, setCgpa] = useState('')
    const [department, setDepartment] = useState('')
    const [semester, setSemester] = useState('')
    const [status, setStatus] = useState('')
    const date = new Date()
    const [image, setImage] = useState('')
    const Navigate = useNavigate()



    const handleSubmit = () => {
        firebase.storage().ref(`/StudentImage/${image.name}`).put(image).then(({ ref }) => {
            ref.getDownloadURL().then((url) => {
                // console.log(url)
                firebase.firestore().collection('Students').add({
                    firstName,
                    lastName,
                    dob,
                    gender,
                    mail,
                    phone,
                    cgpa,
                    department,
                    semester,
                    status,
                    url,
                    createdAt: date.toDateString()
                })
                Navigate('/')
            })
        })
    }
    return (
        <div className='bodyy'>
            <div class="wrapper rounded bg-white">

                <div class="h3">Registration Form</div>

                <div class="form">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <label>First Name</label>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="form-control" required />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3">
                            <label>Last Name</label>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} class="form-control" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <label>DOB</label>
                            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} class="form-control" required />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3">
                            <label>Gender</label>
                            <div class="d-flex align-items-center mt-2" >
                                <label class="option">
                                    <input type="radio" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')} name="radio" />Male
                                    <span class="checkmark"></span>
                                </label>
                                <label class="option ms-4">
                                    <input type="radio" checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')} name="radio" />Female
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mt-md-0 mt-5">
                            <label>Email</label>
                            <input type="email" value={mail} onChange={(e) => setmail(e.target.value)} class="form-control" required />
                        </div>
                        <div class="col-md-4 mt-md-0 mt-5">
                            <label>Phone Number</label>
                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} class="form-control" required />
                        </div>
                        <div class="col-md-4 mt-md-0 mt-2">
                            <label>CGPA</label>
                            <input type="number" step={0.1} min='1' max="10" value={cgpa} onChange={(e) => setCgpa(e.target.value)} class="form-control" required />
                        </div>

                    </div>

                    <div class=" my-md-2 my-3">
                        <label>Department</label>
                        <select id="sub" onChange={(e) => setDepartment(e.target.value)} required>
                            <option value="" selected hidden>Choose Option</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Computer Engineering">Computer Engineering</option>
                            <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
                        </select>
                    </div>
                    <div class=" my-md-2 my-3">
                        <label>Semester</label>
                        <select id="sub" onChange={(e) => setSemester(e.target.value)} required>
                            <option value="" selected hidden>Choose Option</option>
                            <option value="Semester1">Sem1</option>
                            <option value="Semester2">Sem2</option>
                            <option value="Semester3">Sem3</option>
                            <option value="Semester4">Sem4</option>
                            <option value="Semester5">Sem5</option>
                            <option value="Semester6">Sem6</option>
                        </select>
                    </div>
                    <div class=" my-md-2 my-3">
                        <label>Status</label>
                        <select id="sub" onChange={(e) => setStatus(e.target.value)} required>
                            <option value="" selected hidden>Choose Option</option>
                            <option value="Placed">Placed</option>
                            <option value="Not Placed">Not Placed</option>
                        </select>
                    </div>
                    
                    <div class=" my-md-2 my-5 pt-4">
                        <img className="input" alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} ></img>

                        <input className="input" onChange={(e) => {
                            setImage(e.target.files[0])
                        }} type="file" />
                    </div>
                    <div class="btn btn-primary mt-3" onClick={handleSubmit}>Submit</div>
                </div>

            </div>
        </div>
    )
}

export default RegisterStudents
