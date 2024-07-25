import React from "react";

const RightBar = () => {
  return (
    <div className="no-scrollbar rightbar flex-[3] sticky top-[70px] h-Calc overflow-scroll overflow-x-hidden bg-[#f6f3f3] dark:bg-[#333]">
      <div className="container p-5">
        <div className="item p-5 mb-5 bg-white dark:bg-[#222]">
          <span className="text-[#555]">Suggestions for You</span>
          <div className="user flex items-center justify-between mx-0 my-5">
            <div className="userInfo flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nancy_Jewel_McDonie_April_2024.jpg/375px-Nancy_Jewel_McDonie_April_2024.jpg"
                alt=""
              />
              <span className="text-[#000] dark:text-[#f5f5f5]">Kunal Kumar</span>
            </div>
            <div className="buttons flex items-center gap-3">
              <button className="border-none p-[5px] text-white cursor-pointer bg-[#5371ff]">
                Follow
              </button>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-5">
            <div className="userInfo flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nancy_Jewel_McDonie_April_2024.jpg/375px-Nancy_Jewel_McDonie_April_2024.jpg"
                alt=""
              />
              <span className="text-[#000] dark:text-[#f5f5f5]">Kunal Kumar</span>
            </div>
            <div className="buttons flex items-center gap-3">
              <button className="border-none p-[5px] text-white cursor-pointer bg-[#5371ff]">
                Follow
              </button>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-5">
            <div className="userInfo flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nancy_Jewel_McDonie_April_2024.jpg/375px-Nancy_Jewel_McDonie_April_2024.jpg"
                alt=""
              />
              <span className="text-[#000] dark:text-[#f5f5f5]">Kunal Kumar</span>
            </div>
            <div className="buttons flex items-center gap-3">
              <button className="border-none p-[5px] text-white cursor-pointer bg-[#5371ff]">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="item p-5 mb-5 bg-white dark:bg-[#222]">
          <span className="text-[#555]">Online Friends</span>
          <div className="user flex items-center justify-between mx-0 my-5">
            <div className="userInfo flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nancy_Jewel_McDonie_April_2024.jpg/375px-Nancy_Jewel_McDonie_April_2024.jpg"
                alt=""
              />
              <div className="online w-[12px] h-[12px] rounded-full bg-lime-800 absolute top-0 left-[30px]"></div>
              <span className="text-[#000] dark:text-[#f5f5f5]">Kunal Kumar</span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-5">
            <div className="userInfo flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nancy_Jewel_McDonie_April_2024.jpg/375px-Nancy_Jewel_McDonie_April_2024.jpg"
                alt=""
              />
              <div className="online w-[12px] h-[12px] rounded-full bg-lime-800 absolute top-0 left-[30px]"></div>
              <span className="text-[#000] dark:text-[#f5f5f5]">Kunal Kumar</span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-5">
            <div className="userInfo flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nancy_Jewel_McDonie_April_2024.jpg/375px-Nancy_Jewel_McDonie_April_2024.jpg"
                alt=""
              />
              <div className="online w-[12px] h-[12px] rounded-full bg-lime-800 absolute top-0 left-[30px]"></div>
              <span className="text-[#000] dark:text-[#f5f5f5]">Kunal Kumar</span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-5">
            <div className="userInfo flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nancy_Jewel_McDonie_April_2024.jpg/375px-Nancy_Jewel_McDonie_April_2024.jpg"
                alt=""
              />
              <div className="online w-[12px] h-[12px] rounded-full bg-lime-800 absolute top-0 left-[30px]"></div>
              <span className="text-[#000] dark:text-[#f5f5f5]">Kunal Kumar</span>
            </div>
          </div>
          <div className="user flex items-center justify-between mx-0 my-5">
            <div className="userInfo flex items-center gap-5 relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nancy_Jewel_McDonie_April_2024.jpg/375px-Nancy_Jewel_McDonie_April_2024.jpg"
                alt=""
              />
              <div className="online w-[12px] h-[12px] rounded-full bg-lime-800 absolute top-0 left-[30px]"></div>
              <span className="text-[#000] dark:text-[#f5f5f5]">Kunal Kumar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
