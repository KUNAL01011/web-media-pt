import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
const LeftBar = () => {
  return (
    <div className="no-scrollbar flex-[2] sticky top-[75px] h-Calc overflow-scroll overflow-x-hidden bg-white dark:bg-[#222] text-[#000] dark:text-[#f5f5f5] flex flex-col justify-between">
      <div className="p-5">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4 hover:bg-[#333] p-2 rounded-lg cursor-pointer">
            <FaHome size={30} />
            <span className="text-[20px] font-semibold">Home</span>
          </div>
          <hr className="mx-0 border-none h-[0.5px] bg-[ #d3d3d3] dark:bg-[#444]" />
          <div className="flex items-center gap-4 hover:bg-[#333] p-2 rounded-lg cursor-pointer">
            <AiFillMessage size={30} />
            <span className="text-[20px] font-semibold">Messages</span>
          </div>
          <hr className="mx-0 border-none h-[0.5px] bg-[ #d3d3d3] dark:bg-[#444]" />

          <div className="flex items-center gap-4 hover:bg-[#333] p-2 rounded-lg cursor-pointer">
            <IoNotifications size={30} />
            <span className="text-[20px] font-semibold">Notification</span>
          </div>
          <hr className="mx-0 border-none h-[0.5px] bg-[ #d3d3d3] dark:bg-[#444]" />

          <div className="flex items-center gap-4 hover:bg-[#333] p-2 rounded-lg cursor-pointer">
            <FaUser size={30} />
            <span className="text-[20px] font-semibold">Profile</span>
          </div>
          <hr className="mx-0 border-none h-[0.5px] bg-[ #d3d3d3] dark:bg-[#444]" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-4 hover:bg-[#333] p-2 rounded-lg cursor-pointer">
          <img src="https://i.mydramalist.com/BdjblV_5c.jpg" alt="" className="w-12 h-12 rounded-full object-cover"/>
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col">
                <span className="text-[14px] font-bold">Kunal Kumar</span>
                <span className="text-[#d3d3d3]">@kunal_kumar</span>
            </div>
             <CiLogout size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
