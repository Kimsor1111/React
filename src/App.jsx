import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from './pages/home'
import Detail from './pages/detail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: ":id",
        element: <Detail/>,
        errorElement: <h1 className="text-center font-bold text-9xl">Product Not Exist</h1>
      },
      {
        path: "service",
        element: <h1>This is Service</h1>,
      },
      {
        path: "about",
        element: <h1>This is About Us</h1>,
      },
      {
        path: "accessories",
        element: <h1>This is Accessory</h1>,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
