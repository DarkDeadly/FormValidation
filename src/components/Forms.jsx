import React, { useState } from 'react'
import Inputs from './Inputs'
import Buttons from './Buttons'
import validation from '../utils/validation';

const Forms = () => {
    const [errors , setErrors] = useState({}) ;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmpassword: "",
        password : ""
      });
    const handleinputChanges= (e) => {
        const {value , name} = e.target ;
        setFormData((preFormData) => ({
            ...preFormData,[name]:value,
        }))
    }
    const handleClicks = (e) => {
        e.preventDefault()
        setErrors(validation(formData))
        console.log(formData)
    }
  return (
    <div>
      <form action="" onSubmit={handleClicks}>
        <div className="fullName flex pb-4 justify-between gap-5 min-w-full ">
            <Inputs widthinput='w-full' changeFn={handleinputChanges}/>
           
            <Inputs placeholderText='Last Name' inputName='lastName' widthinput='w-full'changeFn={handleinputChanges} />
        </div>
        <Inputs changeFn={handleinputChanges} paddinX='pr-[5%]' placeholderText='Email' inputName='email' marginb='mb-4' inputType='email'/>
        {errors.email && <p className='text-red-500 text-md font-serif font-bold'>{errors.email}</p>}
        <Inputs changeFn={handleinputChanges} paddinX='pr-[5%]' placeholderText='Password' inputName='password' marginb='mb-4' inputType='password'/>
        {errors.password && <p className='text-red-500 text-md font-serif font-bold'>{errors.password}</p>}
        <Inputs changeFn={handleinputChanges} paddinX='pr-[5%]' placeholderText='Confirm Password' inputName='confirmpassword' marginb='mb-4' inputType='password'/>
        {errors.confirmPass && <p className='text-red-500 text-md font-serif font-bold'>{errors.confirmPass}</p>}

        <Buttons btnClick={handleClicks} />
      </form>
    </div>
  )
}

export default Forms
