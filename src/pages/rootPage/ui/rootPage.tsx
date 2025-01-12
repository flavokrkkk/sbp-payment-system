import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Suspense fallback={<h1>Loader....</h1>}>
      <div className="bg-dark-700  h-screen bg-[url('/images/logo.png')] bg-no-repeat bg-left-bottom">
        <Outlet />
      </div>
    </Suspense>
  );
};

export default RootPage;
