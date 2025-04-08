import { Loader } from "@/shared/ui/loader/loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      <div className="bg-[#F0F4FF]">
        <Outlet />
      </div>
    </Suspense>
  );
};

export default RootPage;
