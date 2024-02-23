// Importing necessary packages and components
import { useContext } from "react"
import { LinkContext } from "../App"
import { Link } from 'react-router-dom';
import InputField from "./InputField";

// Importing icons
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTelegramPlane, FaDiscord, FaQuora } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";


// This component is called in the "App" component and will be rendered when the "/input" route is hit
export default function InputYourLinks() {

    // Using Context to access state variables and setter functions provided in the App component
    const { facebook, setFacebook, instagram, setInstagram, X, setX, linkedin, setLinkedin, github, setGithub, youtube, setYoutube, telegram, setTelegram, discord, setDiscord, medium, setMedium, quora, setQuora } = useContext(LinkContext)

    return (
        <div className='h-fit bg-black text-white text-center py-8'>
            {/* A little guide for users */}
            <div className="mb-12 md:mb-24 p-3  text-gray-400 rounded-md border-gray-700 shadow-md shadow-gray-500 w-[90%] md:w-1/3 m-auto">
                <p className="text-gray-300 text-xs md:text-base">Enter your Social Media <span className="font-bold">Username</span>
                    <br />
                    And click on &quot;Generate&quot;
                </p>
            </div>
            {/* Container for all the input fields */}
            <div className='flex flex-wrap justify-center items-center gap-5 mt-8'>
                {/* Rendering the input fields for different social media links by passing Icon, value, and onChange as props to "InputField" component */}
                <InputField Icon={FaFacebook} value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                <InputField Icon={FaInstagram} value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                <InputField Icon={FaXTwitter} value={X} onChange={(e) => setX(e.target.value)} />
                <InputField Icon={FaLinkedin} value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                <InputField Icon={FaGithub} value={github} onChange={(e) => setGithub(e.target.value)} />
                <InputField Icon={FaYoutube} value={youtube} onChange={(e) => setYoutube(e.target.value)} />
                <InputField Icon={FaTelegramPlane} value={telegram} onChange={(e) => setTelegram(e.target.value)} />
                <InputField Icon={FaDiscord} value={discord} onChange={(e) => setDiscord(e.target.value)} />
                <InputField Icon={FaMedium} value={medium} onChange={(e) => setMedium(e.target.value)} />
                <InputField Icon={FaQuora} value={quora} onChange={(e) => setQuora(e.target.value)} />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                {/* Button to navigate back to "Home" component */}
                <Link to="/">
                    <button className='bg-black border-2 md:border-4 border-white mt-12 py-2 md:py-3 px-4 md:px-6 rounded-xl font-bold cursor-pointer transition-all duration-300 hover:text-black hover:bg-white text-sm md:text-xl'>Go Back</button>
                </Link>
                {/* Button to navigate to "YourLinks" component */}
                <Link to="/links">
                    <button className='border-2 md:border-4 border-white mt-1 md:mt-12 py-2 md:py-3 px-4 md:px-6 rounded-xl font-bold cursor-pointer transition-all duration-300 hover:text-black hover:bg-white text-sm md:text-xl'>Generate</button>
                </Link>
            </div>
        </div>
    )
}