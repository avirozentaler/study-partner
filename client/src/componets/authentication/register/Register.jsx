import React, { useState } from "react";
import './Register.css'
import axios from 'axios'
import { useNavigate,Link,Outlet } from "react-router-dom"
import { nameValid, emailValid, passwordValid,countryValid,languagesValid,phone_numberValid,age_rangeValid} from '../../../utilities/validetion/validetion.js'

import '../auth/Auth.css';


export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");   
    const [country, setCountry] = useState("")
    const [languages, setLanguages] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [age_range, setAge_range ] = useState("")
    const navigate = useNavigate();

    const submit = async () => {
        if (!nameValid(name)) {
            alert('name not valid')
        }
        else if (!emailValid(email)) {
            alert('email not valid')
        }
        else if (!passwordValid(password)) {
            alert('password not valid')
        }
        else if (password !== confirmPassword) {
            alert('confirmPassword not match')
        }
        else if (country && !countryValid(country)) {
            alert('country not valid')
        }
        else if (!languagesValid(languages)) {
            alert('languages not valid')
        }
        else if (phone_number && !phone_numberValid(phone_number)) {
            alert('phone number not valid')
        }
        // else if (age_range && !age_rangeValid(age_range)) {
        //     alert('age range not valid')
        // }
        else {
            try {
                const answer = await axios.post('http://localhost:3005/user/register', { name, email, password, confirmPassword,country, languages, phone_number, age_range })
                console.log(answer);
                navigate('/log-in')

            }
            catch (err) {
                console.log(err)
                alert('faild')
            }
        }
    }

    return (
        <div className="Register auth" >
            <p>Register</p>
            <Link to='/'>close</Link>
            <input className="authChildren" type="text" value={name} onChange={(event) => { setName(event.target.value) }} placeholder="name" />
            <input className="authChildren" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder="email" />
            <input className="authChildren" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="password" />
            <input className="authChildren" type="password" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} placeholder="confirm password" />
            <input className="authChildren" type="text" value={country} onChange={(event) => { setCountry(event.target.value) }} placeholder="country" />
            <input className="authChildren" type="text" value={languages} onChange={(event) => { setLanguages(event.target.value) }} placeholder="languages" />
            <input className="authChildren" type="text" value={phone_number} onChange={(event) => { setPhone_number(event.target.value) }} placeholder="phone_number" />
            <input className="authChildren" type="number" value={age_range} onChange={(event) => { setAge_range(event.target.value) }} placeholder="age_range" />
            <button className="authChildren" type={"submit"} onClick={submit} >Register </button>
        </div >
    )
}
