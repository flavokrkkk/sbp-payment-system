import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Suspense fallback={<h1>Loader....</h1>}>
      <div className="bg-dark-200 h-screen">
        <Outlet />
      </div>
    </Suspense>
  );
};

export default RootPage;
