import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import LayoutApp from "./LayoutApp";
import Register from "./components/Register";
import NewRegister from "./components/Newregister";

const router = createBrowserRouter([
    {
        path: "",
        element: <LayoutApp/>,
        children: 
        [
            {
                index:true,
                element: <Home/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "Register",
                element: <Register/>
            },
            {
                path: "NewRegister",
                element: <NewRegister/>
            }
        ]
    },
    {
        path: "*",
        element: <div>Not Found Page...</div>
    }
]);
export default router;