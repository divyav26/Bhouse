import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
          <div className="w-full max-w-md">
          <div className="bg-white shadow-md p-8 mb-6">
          <div className="text-center">
          <h2 className="text-2xl font-semibold text-center mb-10 items-center">
            Forget Password 
            </h2>
            <div className="mb-6 text-sm">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Mail or Username"
                className="w-full border border-gray-400 p-3 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-center">
              <button type="button" className="float-right bg-[#5f3afc] mb-4 mt-2 w-full hover:bg-blue-950 text-white font-bold py-2 px-20 shadow text-sm">SEND</button>
            </div>
            <p className="text-gray-600 text-sm">
              Forget it, {" "}
              <NavLink to="/" className="text-blue-500 hover:underline">
                Send me back 
              </NavLink>
              {""} to the sign in.
            </p>
          </div>
          </div>
          </div>
          </div>
    </Layout>
  )
}

export default ForgetPassword
