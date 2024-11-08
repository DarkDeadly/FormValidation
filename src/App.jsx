import Forms from "./components/Forms"

function App() {

  return (
    <>
    <div className="h-screen w-full bg-[#635E75] flex items-center justify-center">
      <div className="h-[90%] w-[90%] bg-[#2B2738] rounded-3xl flex" >
        <div className="h-full w-[40%] flex items-center justify-center relative">
          <img src="src\assets\wallpape.jpg" alt="wallpaper" className="h-[95%] w-[95%] object-cover  rounded-xl "/>
          <h1 className="absolute text-white bottom-[15%] font-serif font-bold text-2xl underline text-center">Sign Up and discover the world</h1>
        </div>
        <div className="rightContent h-full w-[60%]  p-10">
          <div className="signupHeader inline-block text-white">
            <h1 className="text-5xl">Create An Account</h1>
            <p className="text-[#797684] py-6 text-lg">Already have an account ? <span className="text-lg py-6 text-[#5C5074] underline decoration-[#5C5074] hover:text-purple-600 cursor-pointer">login</span></p>
          </div>
          <div className="SignUpForm ">
            <Forms/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
