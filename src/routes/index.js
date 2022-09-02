import HomePage from "../pages/Home"
import Caculated from "../pages/Caculated";
import FoodList from "../pages/FoodList";
import Menu from "../pages/Menu"
import MenuDetail from "../pages/MenuDetail"
import { HeaderOnly } from "../layout";

const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/caculated', component: Caculated},
    {path: '/foodlist', component: FoodList},
    {path: '/menu', component: Menu},
    {path: '/menudetail', component: MenuDetail},
    // {path: '/search', component: Search, layout: null},
    // {path: '/upload', component: Upload, layout: HeaderOnly},
]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}