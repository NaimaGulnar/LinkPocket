// Importing necessary packages and components
import { useContext, useState } from "react"
import { LinkContext } from "../App"
import DisplayLink from "./DisplayLink";

// Importing icons
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTelegramPlane, FaDiscord, FaQuora } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";


// This component is called in the "App" component and will be rendered when the "/links" route is hit
function YourLinks() {

    // Defining state variables for tracking whether links have been copied to the clipboard or not
    const [copied, setCopied] = useState(false)

    // Using Context to access state variables and setter functions provided in the App component
    const { facebook, instagram, X, linkedin, github, youtube, telegram, discord, medium, quora } = useContext(LinkContext)

    const facebookURL = `https://www.facebook.com/${facebook}`
    const instagramURL = `https://www.instagram.com/${instagram}`
    const XURL = `https://www.twitter.com/${X}`
    const linkedinURL = `https://www.linkedin.com/in/${linkedin}`
    const githubURL = `https://github.com/${github}`
    const youtubeURL = `https://www.youtube.com/@${youtube}`
    const telegramURL = `https://t.me/${telegram}`
    const discordURL = `https://discordapp.com/users/${discord}`
    const mediumURL = `https://${medium}.medium.com`
    const quoraURL = `https://www.quora.com/profile/${quora}`

    // Defining an empty string to store the name of the social site along with the generated links
    let links = "";
    // Checking if each social media username exists, then append its name and corresponding link to the 'links' string
    if (facebook) links += `Facebook - ${facebookURL}\n`;
    if (instagram) links += `Instagram - ${instagramURL}\n`;
    if (X) links += `X - ${XURL}\n`;
    if (linkedin) links += `LinkedIn - ${linkedinURL}\n`;
    if (github) links += `GitHub - ${githubURL}\n`;
    if (youtube) links += `YouTube - ${youtubeURL}\n`;
    if (telegram) links += `Telegram - ${telegramURL}\n`;
    if (discord) links += `Discord - ${discordURL}\n`;
    if (medium) links += `Medium - ${mediumURL}\n`;
    if (quora) links += `Quora - ${quoraURL}\n`;

    // Function to handle copying the name and the generated links of the social sites to clipboard
    function handleCopy() {
        setCopied(prev => !prev); // Toggle the 'copied' state
        window.navigator.clipboard.writeText(links); // Write the 'links' string to the clipboard (which contains the name of the social media site and its corresponding generated link)
    }

    return (
        <div className='h-fit bg-black text-white text-center py-8'>
            {/* A little guide for users */}
            <div className="mb-12 md:mb-24 p-3  text-gray-400 rounded-md border-gray-700 shadow-md shadow-gray-500 w-[90%] md:w-1/4 m-auto">
                <p className="text-gray-300 text-lg md:text-2xl">
                    Your Socials
                </p>
            </div>
            {/* Container for all the generated links */}
            <div className='flex flex-wrap justify-center items-center gap-5 px-2 md:mt-16 md:px-16 lg:px-64 '>
                {/* Rendering all social links by passing Icon, url, and name as props to "DisplayLink" component */}
                {facebook && <DisplayLink Icon={FaFacebook} url={facebookURL} name="Facebook" />}
                {instagram && <DisplayLink Icon={FaInstagram} url={instagramURL} name="Instagram" />}
                {X && <DisplayLink Icon={FaXTwitter} url={XURL} name="Twitter" />}
                {linkedin && <DisplayLink Icon={FaLinkedin} url={linkedinURL} name="LinkedIn" />}
                {github && <DisplayLink Icon={FaGithub} url={githubURL} name="GitHub" />}
                {youtube && <DisplayLink Icon={FaYoutube} url={youtubeURL} name="YouTube" />}
                {telegram && <DisplayLink Icon={FaTelegramPlane} url={telegramURL} name="Telegram" />}
                {discord && <DisplayLink Icon={FaDiscord} url={discordURL} name="Discord" />}
                {medium && <DisplayLink Icon={FaMedium} url={mediumURL} name="Medium" />}
                {quora && <DisplayLink Icon={FaQuora} url={quoraURL} name="Quora" />}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                {/* Button to navigate back to "InputYourLinks" component */}
                <Link to="/input">
                    <button className='bg-black border-2 md:border-4 border-white mt-12 py-2 md:py-3 px-4 md:px-6 rounded-xl font-bold cursor-pointer transition-all duration-300 hover:text-black hover:bg-white text-sm md:text-xl'>Go Back</button>
                </Link>
                {/* Button to copy the 'links' string to clipboard */}
                <button className={`bg-black border-2 md:border-4 border-white mt-1 md:mt-12 py-2 md:py-3 px-4 md:px-6 rounded-xl font-bold cursor-pointer transition-all duration-300 hover:text-black hover:bg-white ${copied && "bg-white text-green-600 hover:bg-white hover:text-green-600"} text-sm md:text-xl`} onClick={handleCopy}>{copied ? "Copied ✅" : "Copy"}</button>
            </div>
        </div>
    )
}

export default YourLinks