import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./main/Main";
import Experience from "./Experience";
import Education from "./Education";
import Hobbies from "./Hobbies";

const router = createBrowserRouter([
    {   
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <App />, 
            },
            {
                path: "Experience",
                element: <Experience />, 
            },
            {
                path: "Education",
                element: <Education />, 
            },
            {
                path: "Hobbies",
                element: <Hobbies />, 
            },
        ]
    }
    
])

export default router;