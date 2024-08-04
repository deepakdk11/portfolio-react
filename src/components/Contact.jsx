import React from 'react'
import contactImg from '../assets/contactImg.png'
import { BsSendFill } from "react-icons/bs";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ac79b978-9d79-4663-81a6-453c5f2e0496");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='p-5 dark:bg-black dark:text-white' id='contact'>
      <div className='w-full mb-10  '>
        <h1 className='text-4xl text-center'>Contact Me</h1>
      </div>
      <div className='w-fit flex mb-10 mx-auto p-4 bg-slate-200 rounded-md dark:dark:bg-gray-900'>
        <div className='hidden md:block '>
            <img src={contactImg} alt="programmer PNG" className='lg:w-128 md:w-96' />
        </div>

        <form className=' w-fit sm:w-128 lg:w-128 md:w-96 px-4 py-2 flex flex-col justify-between' onSubmit={onSubmit}>
            <h1 className='text-2xl'>Get In Touch</h1>
            <hr className='w-20 bg-black h-1 mb-3 dark:bg-white dark:h-1' />
            <span className='text-center text-green-600 mb-2'>{result}</span>
            <input type="text" name="name" id="" placeholder='Name' required className='py-2 px-4 rounded-md focus:outline-none mb-3 dark:bg-gray-950'  />
            <input type="email" name="email" id="" placeholder='Email' required className='py-2 px-4 rounded-md focus:outline-none mb-3 dark:bg-gray-950' />
            <textarea required="" name="message" rows="4" placeholder="Message"  className="outline-none resize-none bg-white dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 mb-3 dark:bg-gray-950"></textarea>
            <button role='submit' className='p-2  rounded-md bg-blue-700 text-white flex items-center justify-center text-lg hover:drop-shadow-xl transition-all'>Submit <BsSendFill size={15} className='ml-2' /></button>
        </form>
      </div>
    </div>
  )
}

export default Contact
