/* eslint-disable react/prop-types */

// Importing necessary packages and components
import { Link } from "react-router-dom";

// This compoenent is called in the "YourLinks" component and it receives Icon, url, and name as props
function DisplayLink({ Icon, url, name }) {
    return (
        // Container for displaying a single social link
        <div className="bg-gray-500 border-2 border-gray-500 text-black w-1/2 md:w-fit flex justify-start items-start py-1 md:py-3 px-3 md:px-6 text-md md:text-xl rounded-md duration-300 hover:bg-black hover:text-white">
            {/* Link to the provided URL, opening in a new tab */}
            <Link to={url} target='_blank'>
                {/* Container for the link content */}
                <div className="flex gap-3 justify-center items-center text-md md:text-xl font-semibold md:font-bold">
                    {/* Rendering the provided Icon */}
                    <Icon className=" size-5 md:size-7" />
                    {/* Displaying the name of the social media platform */}
                    {name}
                </div>
            </Link>
        </div>

    );
}

export default DisplayLink;