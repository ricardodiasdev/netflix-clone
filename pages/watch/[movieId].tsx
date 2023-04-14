import React from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav
        className="
          fixed
          z-10 
          flex 
          w-full
          flex-row
          items-center
          gap-8
          bg-black
          bg-opacity-70
          p-4
        "
      >
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="size={40} text-white cursor-pointer"
        />
        <p className="text-1xl font-bold text-white md:text-3xl">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
