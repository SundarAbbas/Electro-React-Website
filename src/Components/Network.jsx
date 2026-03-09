import React from "react";

const Network = () => {
  return (
    <div className="lg:text-start text-center mt-10 px-6 py-10 flex-col lg:flex-row lg:w-8xl flex justify-center items-center gap-10">
      <div className="w-[100%] flex justify-center items-center">
        <img src="/network.png" className="rounded-full " alt="" />
      </div>
      <div className="">
        <h1 className="font-bold lg:text-6xl mb-6 text-[5vw]">
          Connet Your Tools , Close Your Tabs
        </h1>
        <p className="mb-6 text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          ipsum aliquam corporis dignissimos incidunt nesciunt minima, mollitia
          eligendi hic repellendus deserunt maiores facere impedit accusamus
          quaerat. Nobis!
        </p>
        <button className="text-xl text-blue-800 ">
          Learn More &#8594;
          <hr className="bg-blue-800  " />
        </button>
      </div>
    </div>
  );
};

export default Network;
