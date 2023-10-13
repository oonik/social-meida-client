import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Main from "../../layout/Main";
import Media from "../../pages/Media/Media";
import MediaDetailsCard from "../../shared/MediaCard/MediaDetailsCard";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import About from "../../pages/About/About";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import CreatePost from "../../pages/CreatePost/CreatePost";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/media',
        element: <Media></Media>
      },
      {
        path: '/mediaDetails/:id',
        element: <PrivateRouter><MediaDetailsCard></MediaDetailsCard></PrivateRouter>,
        loader: async({params})=> await fetch(`http://localhost:5000/post/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
   }
])