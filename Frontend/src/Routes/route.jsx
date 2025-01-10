import Add from "../pages/Add"
import Detail from "../pages/Detail"
import Favorite from "../pages/Favorites"
import Home from "../pages/Home"
import Layout from "../pages/Layout"



const ROUTES = [
    {
        path:"/",
        element:<Layout/>,
        children :[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:":id",
                element:<Detail/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"favorite",
                element:<Favorite/>
            }
        ]
    }
]
export default ROUTES