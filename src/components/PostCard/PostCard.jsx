import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, User } from "lucide-react";

const PostCard = ({ title, author, description, imgUrl, slug }) => {
  return (
    <Link href={`blog/${slug}`} className="group w-full max-w-[380px] h-full flex flex-col bg-surface border border-line rounded-2xl overflow-hidden hover:border-ink/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-32px_rgba(20,20,20,0.45)]">
      
      <div className="relative w-full h-[220px] overflow-hidden bg-paper">
        <Image 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
          alt={title} 
          src={imgUrl || "https://dummyimage.com/600x400/f1eee8/8a837a"} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow gap-4">
        <div className="flex items-center gap-2 text-xs font-medium text-accent uppercase tracking-wider">
           <User size={12} />
           <span>{author}</span>
        </div>

        <h2 className="text-xl font-bold text-ink leading-tight group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h2>
        
        <p className="text-ink text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
          {description}
        </p>

        <div className="inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-accent transition-all mt-auto">
          Read article 
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
