// import React from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Register from "../register/Register";
// import Login from "../logIn/LogIn";
// import ForgetPassword from "../forgetPassword/ForgetPassword";
// import ResetPassword from "../resetPassword/ResetPassword";
// import '../auth/Auth.css';


// export default function Auth({ closePop }) {


//     const closeAuth = () => {
//         closePop();
//     }
//     return (

//         <div className="Auth">
//             <span className="closeAuth" onClick={closeAuth}> close</span>
          
//             <Link to='/'>close</Link>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/l" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/forget-pass" element={<ForgetPassword />} />
//                     <Route path="/resetPassword" element={<ResetPassword />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }