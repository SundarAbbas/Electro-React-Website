import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BiArrowBack,
  BiChevronDown,
  BiWorld,
} from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between items-center py-5 px-6  border-b border-gray-300">
      <div className="flex justify-center items-center gap-6">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-bold text-black">Electro</h1>
        </Link>

        {/* Menu For Large Screens */}
        <ul className="hidden md:flex items-center  gap-4">
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="flex items-center gap-1 "
          >
            Products
            <BiChevronDown className="text-lg" />
          </NavLink>

          <NavLink
            to="/"
            className="flex items-center gap-1 "
            onClick={() => setVisible(false)}
          >
            Solutions
            <BiChevronDown className="text-lg" />
          </NavLink>

          <NavLink
            className="flex items-center gap-1 "
            onClick={() => setVisible(false)}
            to="/"
          >
            Resources
            <BiChevronDown className="text-lg" />
          </NavLink>

          <NavLink
            className="flex items-center gap-1 "
            onClick={() => setVisible(false)}
            to="/"
          >
            Enterprise
            <BiChevronDown className="text-lg" />
          </NavLink>

          <NavLink
            className="flex items-center gap-1 "
            onClick={() => setVisible(false)}
            to="/"
          >
            Pricing
            <BiChevronDown className="text-lg" />
          </NavLink>
        </ul>

        {/* Menu For Mobile Screens */}
        <ul
          className={`absolute z-1000 top-0 right-0 overflow-hidden md:hidden bg-white transition-all bottom-0 ${visible ? "w-[100%]" : "w-0"}`}
        >
          <div
            onClick={() => setVisible(false)}
            className="flex items-center cursor-pointer gap-2 py-3 pl-6"
          >
            <span>
              <BiArrowBack />
            </span>
            <p>Back</p>
          </div>
          <div className="flex flex-col ">
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className="pl-6 py-3 flex items-center gap-1"
            >
              Products
              <BiChevronDown className="text-lg" />
            </NavLink>

            <NavLink
              to="/solutions"
              className="pl-6 py-3 flex items-center gap-1"
              onClick={() => setVisible(false)}
            >
              Solutions
              <BiChevronDown className="text-lg" />
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/resources"
              className="pl-6 py-3 flex items-center gap-1"
            >
              Resources
              <BiChevronDown className="text-lg" />
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/enterprise"
              className="pl-6 py-3 flex items-center gap-1"
            >
              Enterprise
              <BiChevronDown className="text-lg" />
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/pricing"
              className="pl-6 py-3 flex items-center gap-1"
            >
              Pricing
              <BiChevronDown className="text-lg" />
            </NavLink>
          </div>
        </ul>
      </div>

      {/* Right Div */}
      <div className="gap-5 flex items-center hidden lg:flex  text-sm">
        <p className="flex gap-2 items-center">
          {" "}
          <BiWorld className="text-2xl" /> EN
        </p>
        <p>Contact Sales</p>
        <p>Login</p>
        <button className="bg-blue-900 text-white w-auto px-2  py-3 rounded-full">
          Sign Up Free &#8594;
        </button>
      </div>

      {/* Settings Icon */}
      <button className="group flex relative   lg:hidden sm:flex">
        <CiSettings />{" "}
        <div className="group-hover:block hidden  absolute pt-5 dropdown-menu right-0 ">
          <div className="flex flex-col gap-2 w-36 rounded justify-center bg-slate-100 px-5 py-3">
            <p className="flex items-center mx-auto  transition-all hover:scale-110">
              {" "}
              <BiWorld className="inline" /> EN
            </p>
            <p className=" transition-all hover:scale-110">Contact Sales</p>
            <p className=" transition-all hover:scale-110">Login</p>
            <button className=" text-sm flex w-auto  rounded-full  transition-all hover:scale-110">
              Sign Up Free &#8594;
            </button>
          </div>
        </div>
      </button>

      {/* Menu Icon */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setVisible(!visible)}
      >
        ☰{" "}
      </button>
    </div>
  );
};

export default Navbar;
