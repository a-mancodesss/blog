import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ title, author, description, imgUrl,slug }) => {
  return (
    <>
      <div className="card-container flex flex-col sm:flex-row  items-center">
        
        <div className="group max-w-fit border  shadow-sm  shadow-blue-700/[50%] rounded-md px-2 py-4 sm:max-w-fit flex flex-col sm:flex-row sm:h-max cursor-pointer gap-y-4">
          <div className="top w-[315px] overflow-hidden  relative">
            <div className=" transition-all duration-300 image-container relative h-[150px] w-[300px] sm:h-[300px] mx-auto">
              <Image className="object-cover rounded-md " alt="image" src={imgUrl?imgUrl:"https://dummyimage.com/600x400/000/fff"} fill priority/>
            </div>
          </div>

          <div className="bottom w-[90%] sm:w-auto mx-auto flex flex-col ">
            <div className="left ">
              <div className=" text-container sm:w-[200px] flex flex-col flex-wrap ">
                <div className="text-xl font-bold mb-2">{title}</div>
                <div className="text-gray-500">{author}</div>
                <p className="hidden">{description}</p>
              </div>
            </div>
            <div className="right flex justify-center bg-slate-900 rounded-md text-white font-semibold mt-2">
              <Link href={`blog/${slug}`} className="">
                Read more ---
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default PostCard;
