import Image from "next/image";


export default async  function Home() {
  return (
    <div>
     
      <div className="imagecontainer border-2 border-black rounded-full relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] mx-auto my-8 border-opacity-20 overflow-visible">
        <Image fill src={'/workspace.png'} alt="Aman Image" className="rounded-full object-cover"/>
      </div>
      <div className="sm:mt-18 ">
        <div className="text-center text-2xl font-bold mb-4">Welcome to my Blog</div>
        <div className="text-center">Here, we share insights, stories, and tips on a variety of topics that inspire and inform. Our mission is to create a vibrant community where ideas flourish and voices are heard. Whether you're looking for lifestyle advice, tech trends, or personal development strategies, you'll find valuable content tailored just for you. Join us on this journey of exploration
      </div>
      </div>
    </div>
  );
}
