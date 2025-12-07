import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, User } from "lucide-react";

const PostCard = ({ title, author, description, imgUrl, slug }) => {
  return (
    <Link href={`blog/${slug}`} className="group w-full max-w-[380px] h-full flex flex-col bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
      
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
          alt={title} 
          src={imgUrl || "https://dummyimage.com/600x400/1e293b/475569"} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow gap-4">
        <div className="flex items-center gap-2 text-xs font-medium text-orange-400 uppercase tracking-wider">
           <User size={12} />
           <span>{author}</span>
        </div>

        <h2 className="text-xl font-bold text-white leading-tight group-hover:text-orange-500 transition-colors line-clamp-2">
          {title}
        </h2>
        
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
          {description}
        </p>

        <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-orange-400 transition-all mt-auto">
          Read article 
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
