import React from "react";
import {  BiSearch } from "react-icons/bi";
import { FaAngleDown, FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineModeNight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=" bg-red -600 h-[10vh] flex justify-between items-center pl-12 border-b">
      <div className=" bg-blue-50 border-gray-200 border flex items-center justify-center rounded-2xl px-3 text-xl py-1">
        <label htmlFor="io">
          <BiSearch />
        </label>
        <input
          id="io"
          placeholder="Search Here ..."
          className=" outline-none text-lg  bg-inherit"
          type="text"
        ></input>
      </div>

      <div className=" text-xl">
        <RxHamburgerMenu />
      </div>

      <div className=" flex text-gray-600">
        <div className=" cursor-pointer gap-1 px-2 hover:text-gray-900 transition-all delay-100 flex justify-center items-center relative text-lg">
          {" "}
          <span className=" absolute text-6xl -left-[1vw] -top-[1.2vw] text-green-600 ">
            .
          </span>{" "}
          Vansh Bhutani <FaAngleDown className=" text-sm" />
        </div>

        <div className=" text-2xl flex justify-center items-center border py-6 px-3 hover:text-gray-900 transition-all delay-100  cursor-pointer">
          <MdOutlineModeNight />
        </div>
        <div className=" relative text-2xl flex justify-center items-center border py-5 px-3 hover:text-gray-900 transition-all delay-100  cursor-pointer">
          <span className=" absolute text-5xl -top-[3.1vh] right-[14px]  text-red-600">.</span> <FaRegBell />
        </div>
        <div className=" text-2xl flex justify-center items-center border py-5 px-3 hover:text-gray-900 transition-all delay-100  cursor-pointer">
          <IoSettingsOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
