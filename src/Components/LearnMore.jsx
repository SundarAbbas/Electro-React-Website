import React from "react";

const LearnMore = () => {
  return (
    <div className="flex text-center lg:text-start flex-col lg:w-6xl mx-auto lg:flex-row justify-around items-center px-6 py-10 mt-10 lg:mt-20">
      <div className="px-10 ">
        <h1 className="font-bold mb-10 text-3xl lg:text-6xl ">
          Work together , wherever you work
        </h1>
        <p className="text-justify text-gray-500 mb-10">
          In the office , remote , or a mix of the two, with Electro , your team
          can reconnect , collaborate and co-relate in one space no matter where
          you are.
        </p>
        <button className="text-xl text-blue-800 ">
          Learn More &#8594;
          <hr className="bg-blue-800  " />
        </button>
      </div>
      <div className="px-10">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default LearnMore;
