import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="bg-white navbar flex items-center justify-between px-5 py-[10px] h-[75px] border border-[#d3d3d3] dark:border-[#444] sticky top-0 z-50 dark:bg-[#222] dark:text-[#F5F5F5]">
      <div className="left flex items-center gap-8">
        <Link to="/">
          <span className="font-bold text-[25px] text-black dark:text-[#f5f5f5]">Web Media</span>
        </Link>
        <FaHome size={20} className="cursor-pointer" />
        {!darkMode ? (
          <MdLightMode
            size={20}
            className="cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <MdDarkMode
            size={20}
            className="cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
        <div className="search flex items-center gap-3 border border-[#d3d3d3] rounded-[5px] p-1 dark:border-[#444]">
          <IoSearch />
          <input
            type="text"
            placeholder="search"
            className="border-none w-[500px] bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="right flex items-center gap-5 ">
        <MdEmail size={20} className="cursor-pointer" />
        <IoMdNotifications size={20} className="cursor-pointer" />
        <div className="user flex items-center gap-3 font-bold">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ta_u7THT8SOe5a63Wrb699BPvZ6QEu4NQtQopxFGof5vN8fvgoGKyM_UE84aceSlz24&usqp=CAU"
            alt=""
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
          <span className="text-white dark:text-black">Kunal Kumar</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
