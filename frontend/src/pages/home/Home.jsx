// import Posts from "../../components/posts/Posts";

import { useState } from "react";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/posts/Stories";
import CreatePost from "../../components/createPost";

const Home = () => {
  const [feedType, setFeedType] = useState("forYou");
  return (
    <div className='px-[70px] py-5'>
				{/* Header */}
				<div className='flex w-full border-b border-gray-700 bg-[#222] rounded-lg shadow-lg'>
					<div
						className={
							"flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
						}
						onClick={() => setFeedType("forYou")}
					>
						For you
						{feedType === "forYou" && (
							<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
						)}
					</div>
					<div
						className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative'
						onClick={() => setFeedType("following")}
					>
						Following
						{feedType === "following" && (
							<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
						)}
					</div>
				</div>

				{/*  CREATE POST INPUT */}
				<CreatePost />

				{/* POSTS */}
        <Posts />
				{/* <Posts feedType={feedType} /> */}
			</div>
  );
};

export default Home;
