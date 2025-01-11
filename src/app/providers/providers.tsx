import { routes } from "@/pages/routes";
import { store } from "@/shared";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

const Providers = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

export default Providers;
