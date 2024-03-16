import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {dropdownfruit}  from "../actions/index"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch =useDispatch()
  const[frout,setFrout] =useState("")
let arr=["Apple","Mango","Banana","Orange"]
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };
  const submitForm = () => {
    console.log(username ,password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white shadow-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            onClick={submitForm}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
      <div>
      <h1>{frout}</h1>
        <select 
        //value={frout}
        onChange={(e)=> {
          dispatch(dropdownfruit("suraj"))
          setFrout(e.target.value)}}
        >
        {arr.map((e)=><option key={e} value={e}>{e}</option>)} 
          {/* <option value="Mango2">Mango</option>
          <option value="Banana">Banana</option>
          <option value="Orange">Orange</option> */}
        </select>
      </div>
    </div>
  );
};

export default Login;

