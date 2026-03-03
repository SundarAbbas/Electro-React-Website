import React from "react";

const LearnMore = () => {
  return (
    <div className=" flex text-center lg:text-start flex-col-reverse  lg:w-6xl mx-auto lg:flex-row justify-around items-center px-6 py-10 mt-10 lg:mt-20">
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
      <div className="px-10 mb-10">
        {/* <img src="/hero.png" alt="" /> */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-7">
            <div className="w-[110px] bg-[url('/le1.jpg')] bg-center bg-cover hover:-translate-y-4 transition-transform  h-[300px] rounded-full"></div>
            <div className="w-[110px] bg-[url('/le4.jpg')] bg-center bg-cover hover:-translate-y-4 transition-transform  h-[300px] mb-20 rounded-full"></div>
            <div className="w-[110px] bg-[url('/le3.jpg')] bg-center bg-cover hover:-translate-y-4 transition-transform  h-[300px] rounded-full"></div>
          </div>

          <div className="flex relative flex-row justify-center items-center gap-0">
            <div className="h-[50px] bg-[url('/le2.jpg')] bg-center bg-cover hover:-translate-y-4 transition-transform absolute right-3 w-[50px] rounded-full "></div>
            <div className="h-[50px] bg-[url('/le6.jpg')] bg-center bg-cover hover:-translate-y-4 transition-transform  absolute w-[50px]  rounded-full "></div>
            <div className="h-[50px] bg-[url('/le5.jpg')] bg-center bg-cover hover:-translate-y-4 transition-transform absolute left-3 w-[50px] rounded-full "></div>
            <div className="h-[50px] border-2 /bg-white border-gray-600 hover:-translate-y-4 transition-transform absolute left-12 w-[50px] rounded-full flex justify-center items-center ">+98</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
