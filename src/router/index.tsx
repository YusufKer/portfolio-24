import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"

/* --- PAGES ---*/
import Home from "../pages/Home"
import About from "../pages/About"
import Work from "../pages/Work"

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout><Home/></Layout>
    },
    {
        path:"/about",
        element:<Layout><About/></Layout>
    },
    {
        path:"/work",
        element:<Layout><Work/></Layout>
    },
])

export default router