import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Fleets, Home, Layout, Nothing, Services } from "./routes/Routes";
import { Suspense } from "react";
import './App.css'
import Loader from "./components/Loader/Loader";



const router = createBrowserRouter([
  { 
    path: "/",
    element:(
      <Suspense fallback={<Loader/>}><Layout/></Suspense>
    ),
    children: [
      {
        path: "/",
        index: true,
        element:( <Suspense fallback={<div className="container-loade"><Loader/></div>}><Home/></Suspense>)
      },
      {
        path: "/About",
        element:( <Suspense fallback={<div className="container-loade"><Loader/></div>}><About/></Suspense>)
      },
      {
        path: "/Services",
        element:( <Suspense fallback={<div className="container-loade"><Loader/></div>}><Services/></Suspense>)
      },
      {
        path: "/Fleets",
        element: ( <Suspense fallback={<div className="container-loade"><Loader/></div>}><Fleets/></Suspense>)
      }
    ],
  },
  {
    path: "*",
    element:( <Suspense fallback={<Loader/>}><Nothing/></Suspense>),
  },
]);

const App = () => {
  return (<RouterProvider router={router}/>);
};

export default App;