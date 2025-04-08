import { Loader } from "lucide-react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center">
          <Loader className="text-[#30F1E4] animate-spin" />
        </div>
      }
    >
      <div className="bg-[#F0F4FF] min-h-screen w-full relative overflow-hidden">
        <div
          className="absolute hidden sm:block top-10 left-10 w-16 h-16 bg-zinc-300 opacity-90 rounded-lg 
      animate-[float_5s_infinite_ease-in-out]"
        />
        <div
          className="absolute hidden sm:block top-20 left-40 w-12 h-12 bg-zinc-300  rounded-lg 
      animate-[float_6s_infinite_ease-in-out] delay-1000"
        />
        <div
          className="absolute hidden sm:block bottom-20 right-20 w-20 h-20 bg-zinc-300  rounded-lg 
      animate-[float_4s_infinite_ease-in-out] delay-500"
        />
        <div
          className="absolute hidden sm:block bottom-40 right-60 w-10 h-10 bg-zinc-300  rounded-lg 
      animate-[float_7s_infinite_ease-in-out] delay-1500"
        />
        <div
          className="absolute hidden sm:block top-60 left-80 w-14 h-14 bg-zinc-300 rounded-lg 
      animate-[float_5.5s_infinite_ease-in-out] delay-2000"
        />

        <div
          className="absolute hidden sm:block top-1/4 left-5 w-14 h-14 bg-zinc-300  rounded-lg 
      animate-[float_5.8s_infinite_ease-in-out] delay-400"
        />
        <div
          className="absolute hidden sm:block top-1/3 left-8 w-10 h-10 bg-zinc-300  rounded-lg 
      animate-[float_6.2s_infinite_ease-in-out] delay-1100"
        />
        <div
          className="absolute hidden sm:block bottom-1/4 left-12 w-12 h-12 bg-zinc-300  rounded-lg 
      animate-[float_4.5s_infinite_ease-in-out] delay-1600"
        />

        <div
          className="absolute hidden sm:block top-1/4 right-5 w-16 h-16 bg-zinc-300 rounded-lg 
      animate-[float_5.5s_infinite_ease-in-out] delay-700"
        />
        <div
          className="absolute hidden sm:block top-1/3 right-8 w-10 h-10 bg-zinc-300  rounded-lg 
      animate-[float_6s_infinite_ease-in-out] delay-1300"
        />
        <div
          className="absolute hidden sm:block bottom-1/4 right-12 w-14 h-14 bg-zinc-300  rounded-lg 
      animate-[float_4.7s_infinite_ease-in-out] delay-1900"
        />

        <Outlet />
      </div>
    </Suspense>
  );
};

export default RootPage;
