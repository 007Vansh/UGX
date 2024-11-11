import React, { useState } from "react";
import imgagee from "../assets/images.jpg";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsLayoutSplit } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaChartBar, FaMap, FaRegBuilding, FaWpforms } from "react-icons/fa6";
import { RiPagesLine, RiProfileFill } from "react-icons/ri";
import { CiViewTable } from "react-icons/ci";
const Sidebar = () => {

    const [curr , setCurr] = useState(0)

  return (
    <div className=" flex flex-col justify-start items-start w-full border-r h-full ">
      <div className=" border py-2 px-2 w-full gap-2 flex justify-center items-center text-2xl h-[10vh] font-semibold ">
        {" "}
        <img className=" w-12" src={imgagee}></img> Power Analytics
      </div>
      <div className=" bg- -400 flex flex-col w-full">
        {
            [
                { icon: <AiOutlineDashboard />, text: "Dashboard", dot: false },
                { icon: <BsLayoutSplit />, text: "Layouts", dot: true },
                { icon: <IoIosMail />, text: "Mailbox", dot: true },
                { icon: <SlCalender />, text: "Calender", dot: false },
                { icon: <FaRegBuilding />, text: "UI Demands", dot: true },
                { icon: <FaWpforms ></FaWpforms>, text: "Forms", dot: false },
                { icon: <RiPagesLine></RiPagesLine>, text: "Pages", dot: true },
                { icon: <CiViewTable></CiViewTable>, text: "Tables", dot: false },
                { icon: < FaChartBar/>, text: "Charts", dot: false },
                { icon: <FaMap />, text: "Maps", dot: true },
                { icon: <RiProfileFill />, text: "Profile", dot: true },
              ].map((single , ind)=><div className={` relative border-b  flex justify-between py-2 items-center w-full px-8 cursor-pointer ${curr===ind ? "text-blue-500 hover:texl-blue-700" : "text-gray-600 hover:text-gray-800 transition-all delay-100"} `}>
                <div onClick={()=> setCurr(ind)} className=" flex justify-center items-center text-lg gap-1"> {single.icon} {single.text} </div>
                { single.dot && <div className=" text-2xl">.</div>}
                { curr === ind && <div className=" h-6 w-1 rounded-2xl absolute right-0 bg-blue-500"></div> }
              </div>)
        }
      </div>
    </div>
  );
};

export default Sidebar;
