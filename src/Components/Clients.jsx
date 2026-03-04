import React from "react";

const Clients = () => {
  return (
    <div className="px-6 py-4 mt-10  flex flex-col  justify-center items-center">
      <p className="text-gray-600 mb-5">Trusted By 45M Users</p>

      <div className="flex   justify-between lg:min-w-5xl   items-center flex-nowrap">
        <img src="/user1.png" className="w-10  md:w-20 lg:w-28" alt="" />
        <img src="/user2.png" className="w-10  md:w-20 lg:w-28" alt="" />
        <img src="/user3.png" className="w-10    md:w-20 lg:w-28" alt="" />
        <img src="/user4.png" className="w-10   md:w-20 lg:w-28" alt="" />
        <img src="/user5.png" className="w-10  md:w-20 lg:w-28" alt="" />
      </div>
    </div>
  );
};

export default Clients;
