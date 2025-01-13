import { Loader } from "@/shared/ui/loader/loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen bg-dark-100 flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      <div className="bg-dark-700  bg-[url('/images/logo.png')] bg-cover bg-left-bottom bg-fixed">
        <Outlet />
      </div>
    </Suspense>
  );
};

export default RootPage;
