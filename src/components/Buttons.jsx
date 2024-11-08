import React from 'react'

const Buttons = ({ButtonText = "Create Account" , buttonbg = "bg-[#6E54B5]" , btnClick}) => {
  return (
    <div>
      <button className={`${buttonbg} w-full py-5 rounded-lg text-white font-mono text-xl`}
      onClick={btnClick}
      >{ButtonText}</button>
    </div>
  )
}

export default Buttons
