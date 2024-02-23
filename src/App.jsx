// Importing necessary packages and components
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createContext, useState } from "react"
import Home from "./components/Home";
import InputYourLinks from "./components/InputYourLinks"
import YourLinks from "./components/YourLinks"

// Creating a context to manage the state of all social links
export const LinkContext = createContext();

function App() {

  // Defining state variables for social links
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [X, setX] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [github, setGithub] = useState('')
  const [youtube, setYoutube] = useState('')
  const [telegram, setTelegram] = useState('')
  const [discord, setDiscord] = useState('')
  const [medium, setMedium] = useState('')
  const [quora, setQuora] = useState('')

  return (

    // Providing the state values and setter functions to the components using Context
    <LinkContext.Provider value={{
      facebook, setFacebook,
      instagram, setInstagram,
      X, setX,
      linkedin, setLinkedin,
      github, setGithub,
      youtube, setYoutube,
      telegram, setTelegram,
      discord, setDiscord,
      medium, setMedium,
      quora, setQuora
    }}>
      <BrowserRouter>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the input form for the user */}
          <Route path="/input" element={<InputYourLinks />} />
          {/* Route for displaying user's social links */}
          <Route path="/links" element={<YourLinks />} />
        </Routes>
      </BrowserRouter>
    </LinkContext.Provider >
  )
}

export default App
