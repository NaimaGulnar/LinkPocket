// Importing necessary packages and components
import { Link } from "react-router-dom"

// This component is called in the "App" component and will be rendered when the "/" route is hit
function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      {/* Main Title */}
      <h1 className="font-extrabold text-3xl md:text-5xl tracking-[0.2rem] text-center mb-5">Welcome to
        <span className="animate-pulse"> LinkPocket</span>
      </h1>
      {/* Sub Title */}
      <p className="text-center text-md md:text-xl text-gray-300">One-Stop Destination for All Your Social Media Links!</p>
      {/* Button to navigate to "InputYourLinks" component */}
      <Link to="/input">
        <button className="border-2 md:border-4 border-white mt-16 py-2 md:py-3 px-4 md:px-6 rounded-xl font-bold cursor-pointer my-5 transition-all duration-300 hover:text-black hover:bg-white text-sm md:text-xl">Get Started</button>
      </Link>
    </div>
  )
}

export default Home
