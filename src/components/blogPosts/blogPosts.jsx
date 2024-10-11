"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CardDemo({author,readTime,description,postImage,authorImage}) {
  return (
    (<div className="max-w-xs w-full group/card">
     <div
  className={cn(
    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
  )}
  style={{
    backgroundImage: `url(${postImage})`,
    backgroundSize: 'cover',
  }}
>
  <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-40"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={authorImage}
            className="h-10 w-10 rounded-full border-2 object-cover" />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
             {author}
            </p>
            <p className="text-sm text-gray-400">{readTime}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {author}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>)
  );
}
