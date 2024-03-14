/* eslint-disable react/prop-types */

// This compoenent is called in the "InputYourLinks" component and it receives Icon, value, and onChange as props from that component
function InputField({ Icon, value, onChange, placeholder }) {
  return (
    // Container for a single input field
    <div className='flex justify-center w-[90%] md:w-1/3 items-center gap-4 mx-6'>
      {/* Rendering the provided Icon component */}
      <Icon className=" size-5 md:size-7" />
      {/* Rendering the Input field */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=" w-[100%] bg-transparent py-2 outline-none border-b-2 ml-2 md:ml-5 border-gray-500 text-sm md:text-base placeholder:text-gray-600" />
    </div>
  )
}

export default InputField

