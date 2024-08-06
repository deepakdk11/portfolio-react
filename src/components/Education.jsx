import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import hicas from "../assets/hicas.jpg";
import hicas2 from "../assets/hicas2.jpg";

const Education = () => {
  return (
    <div className="dark:bg-black p-3" id="education">
      <div className="w-full flex  justify-center items-center dark:text-white">
        <IoSchoolSharp size={40} />
        <h1 className="text-4xl ml-2">My Education</h1>
      </div>
      <div className="my-10">
        <div className=" flex flex-col items-center md: md:flex-row w-fit my-10 mx-auto p-4 bg-slate-200 rounded-md dark:bg-gray-900">
          <img src={hicas} alt="HICAC" className="w-fit md:w-40 rounded-md" />
          <div className="md:mx-5">
            <h1 className="text-2xl sm:text-4xl text-blue-600 mt-4 md:mt-0 md:font-normal md:text-4xl">
              Master of Business Administration
            </h1>
            <p className="md:text-xl my-2 dark:text-gray-400">
              Hindusthan College of Arts & Science
            </p>
            <p className="text-green-500">2020 - 2022 | Completed</p>
          </div>
        </div>

        <div className=" flex flex-col items-center md: md:flex-row w-fit my-10 mx-auto p-4 bg-slate-200 rounded-md dark:bg-gray-900">
          <img src={hicas2} alt="HICAC" className="w-fit md:w-40 rounded-md" />
          <div className="md:mx-5">
            <h1 className="text-2xl sm:text-4xl text-blue-600 mt-4 md:mt-0 md:font-normal md:text-4xl">
              Bachelor of Computer Applications
            </h1>
            <p className="md:text-xl my-2 dark:text-gray-400">
              Hindusthan College of Arts & Science
            </p>
            <p className="text-green-500">2017 - 2020 | Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
