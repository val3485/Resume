import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./main/Main";
import Experience from "./Experience";

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
            }
        
        ]
    }
    
])

export default router;