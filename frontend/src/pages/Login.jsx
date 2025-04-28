import React from 'react'
import InputField from '../Components/Iputfield'
import axios from "axios"
import { useState } from 'react';
import { Link } from "react-router";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';
import {toast} from "react-toastify"
import { BASE_URL } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const {login} = useAuth();

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        // const response = await axios.post(`${BASE_URL}login`, {email, password})
        const response = await axios.post(`${BASE_URL}login`, {email, password})
        if(response.data.success){
            login(response.data.user);
            localStorage.setItem("token", response.data.token);
            toast.success("Login Successfully 🎉")
            navigate("/dashboard");
        }
        // console.log(response);
    } catch (error) {
        if(error.status == 404){
            toast.error("User does not exist");
        }else{
            toast.error("Invalid email or password ❌"); 
        }
                
    }
}

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-2xl md:text-5xl text-gray-900 text-center">Hey, Rockstar! 👋</h1>
          <p className="leading-relaxed mt-4 text-center">
            Let's get you checked in, updated, and ready to roll.
            Your dashboard is just a click away!
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h1 className="text-gray-900 font-medium title-font mb-5 text-center text-lg md:text-3xl">Login</h1>
          
          <form onSubmit={handleSubmit}>
            <InputField forAtt="email" label="Email" type="text" id="email" name="email" onChangeFunction={(e) => setEmail(e.target.value)}/>
            <InputField forAtt="password" label="Password" type="password" id="password" name="password" onChangeFunction={(e) => setPassword(e.target.value)}/>
            
            <Link to="/forget" className='text-[#3b82f6]'>Forget Password? </Link>
            <button type="submit" className="w-full text-white bg-[#3b82f6] border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-4">
            Login
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Don't have an account? <Link to="/signup" className="text-[#3b82f6] hover:underline">Signup</Link>
          </p>
        </div>
      </div>
    </section>
  )
}