import React, { useState } from "react";
import { Button } from "./Button";


const SignUpForm = ({setIsSignInFormOpen}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-[#010409] shadow-white">
      <form
        className="w-full max-w-sm relative bg-gray-900 text-white p-8 rounded-2xl shadow-xl"
      >
        <div className="absolute top-2 right-2">
            <Button variant='close' size='small' label='Close' onClick={()=>{setIsSignInFormOpen(!setIsSignInFormOpen)}}/>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Sign Up
        </h2>

        <label className="block mb-4">
          <span className="block text-white mb-1">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
          )}
        </label>

        <label className="block mb-6">
          <span className="block text-white mb-1">Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
          {formErrors.password && (
            <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
          )}
        </label>

        <Button variant="primary" size="large" label="Sign Up" type="submit" width="w-full"/>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <button
            className="text-gray-300 cursor-pointer"
          >
            Sign-in
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;