import React from 'react'

const Inputs = ({changeFn ,placeholderText = 'First Name' , inputName = "firstName" , paddinX = 'pr-2' , marginb = "mb-0" , widthinput = 'w-full' , inputType = "text"}) => {
  return (
    <div>
      <input onChange = {changeFn}type={inputType} placeholder={placeholderText} className={`py-2 bg-[#635E75]  ${paddinX} text-white rounded-lg  pl-2 placeholder-white ${widthinput} ${marginb}`} name={inputName} required />
    </div>
  )
}

export default Inputs
