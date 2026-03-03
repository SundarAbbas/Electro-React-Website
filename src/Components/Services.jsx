import React from "react";

const Services = () => {
  return (
    <div className="px-6 py-4 mt-10 lg:mt-20 flex flex-col justify-center items-center ">
      <div className="lg:w-2xl w-full relative ">
        <h1 className="bg-yellow-400 inline -top-6 absolute right-0  uppercase transition-transform rotate-15 text-xs rounded-lg py-1 px-2 font-semibold">
          Your Ideas Start Here
        </h1>
        <h1 className="text-center   font-bold lg:text-5xl text-2xl sm:text-2xl md:text-3xl">
          Collaborate Without Constraints
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 px-10  py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="">
          <h1 className="text-center lg:text-start text-2xl font-bold test-black mb-7">
            Free Forever
          </h1>
          <p className="text-justify text-md text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum et
            hic, rerum consequuntur tempore nesciunt excepturi voluptate ut
            voluptatibus maiores adipisci nisi! Sed distinctio itaque tenetur
            rerum fuga quia,{" "}
            <span className="text-blue-900 font-semibold">pricing plans</span>{" "}
            fugit placeat porro veritatis officiis.
          </p>
        </div>
        <div className="">
          <h1 className="text-center lg:text-start text-2xl font-bold test-black mb-7">
            Easy Integrations
          </h1>
          <p className=" text-justify text-md text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum et
            hic, rerum consequuntur tempore nesciunt excepturi voluptate ut
            voluptatibus maiores adipisci nisi! Sed distinctio itaque tenetur
            rerum fuga quia,{" "}
            <span className="text-blue-900 font-semibold">Marketplace</span>{" "}
            fugit placeat porro veritatis officiis.
          </p>
        </div>
        <div className="">
          <h1 className="text-center lg:text-start text-2xl font-bold test-black mb-7">
            Security First
          </h1>
          <p className="text-justify text-md text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum et
            hic, rerum consequuntur tempore nesciunt excepturi voluptate ut
            voluptatibus maiores adipisci nisi! Sed distinctio itaque tenetur
            rerum fuga quia,{" "}
            <span className="text-blue-900 font-semibold">Trust Center</span>{" "}
            fugit placeat porro veritatis officiis.
          </p>
        </div>
      </div>
      <button className="tranistion-all hover:bg-blue-900      bg-blue-800 text-white rounded-full py-2  px-5">
        Sign up free &#8594;
      </button>
    </div>
  );
};

export default Services;
