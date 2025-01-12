import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Suspense fallback={<h1>Loader....</h1>}>
      <div className="bg-[#0C0D12]  h-screen bg-[url('/images/logo.png')] bg-no-repeat bg-left-bottom">
        <Outlet />
      </div>
    </Suspense>
  );
};

export default RootPage;
