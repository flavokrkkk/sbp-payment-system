import Footer from "@/widgets/footer";
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
      <div className="bg-[#F0F4FF] h-[calc(100vh-50px)] w-full relative overflow-hidden">
        <div
          className="absolute hidden sm:block top-10 left-16 w-16 h-16 bg-[#E0E7FB] opacity-90 rounded-[30px] 
      animate-[float_5s_infinite_ease-in-out]"
        />
        <div
          className="absolute hidden sm:block top-10 left-48 w-20 h-20 bg-[#E0E7FB] rounded-[30px] 
      animate-[float_6s_infinite_ease-in-out] delay-1000"
        />
        <div
          className="absolute hidden sm:block top-40 left-64 w-[128px] h-[128px] bg-[#E0E7FB] rounded-[30px] 
      animate-[float_5.5s_infinite_ease-in-out] delay-2000"
        />

        <div
          className="absolute hidden sm:block top-36 left-20 w-[96px] h-[96px] bg-[#E0E7FB] rounded-[30px] 
      animate-[float_5.8s_infinite_ease-in-out] delay-400"
        />
        <div
          className="absolute hidden sm:block top-32 left-4 w-10 h-10 bg-[#E0E7FB] rounded-[30px] 
      animate-[float_6.2s_infinite_ease-in-out] delay-1100"
        />

        <div
          className="absolute hidden sm:block bottom-10 right-16 w-16 h-16 bg-[#E0E7FB]opacity-90 rounded-[30px] 
      animate-[float_5s_infinite_ease-in-out]"
        />
        <div
          className="absolute hidden sm:block bottom-10 right-48 w-20 h-20 bg-[#E0E7FB]  rounded-[30px] 
      animate-[float_6s_infinite_ease-in-out] delay-1000"
        />
        <div
          className="absolute hidden sm:block bottom-40 right-64 w-[128px] h-[128px] bg-[#E0E7FB] rounded-[30px] 
      animate-[float_5.5s_infinite_ease-in-out] delay-2000"
        />

        <div
          className="absolute hidden sm:block bottom-36 right-20 w-[96px] h-[96px] bg-[#E0E7FB]  rounded-[30px] 
      animate-[float_5.8s_infinite_ease-in-out] delay-400"
        />
        <div
          className="absolute hidden sm:block bottom-32 right-4 w-10 h-10 bg-[#E0E7FB] rounded-[30px] 
      animate-[float_6.2s_infinite_ease-in-out] delay-1100"
        />

        <Outlet />
      </div>
      <Footer />
    </Suspense>
  );
};

export default RootPage;
