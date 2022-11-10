
const nameRegexp = /^[a-zA-Z ]{2,30}$/;
const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegexp = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,16}$/;
const countryRegexp = /^[a-zA-Z ]{3,30}$/
const languagesRegexp = /^[a-zA-Z ]{3,20}$/
const phoneNumberRegexp =/^[+ 0-9]{7,14}$/
const ageRangeRegexp = /^[0-9]$/



const nameValid = (name) => { return nameRegexp.test(name) }
const emailValid = (email) => { return emailRegexp.test(email) }
const passwordValid = (password) => { return passwordRegexp.test(password) }
const countryValid = (country) => { return countryRegexp.test(country) }
const languagesValid = (languages) => { return languagesRegexp.test(languages) }
const phone_numberValid = (phone_number) => { return phoneNumberRegexp.test(phone_number) }
const age_rangeValid = (age_range) => { return ageRangeRegexp.test(age_range) }



export{
    nameValid,
    emailValid,
    passwordValid,
    countryValid,
    languagesValid,
    phone_numberValid,
    age_rangeValid,
}