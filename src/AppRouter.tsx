import { RouterProvider } from "react-router";
import router from "./router";
// import { createContext } from "react";
import store from "./store/store";
import { Provider } from "react-redux";

function AppRouter() {
    return (
    <div > 
        <Provider store={store}>
            <RouterProvider router={router}/> 
        </Provider>
    </div>
)}
export default AppRouter