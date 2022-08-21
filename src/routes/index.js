import HomePage from "../pages/Home"
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import { HeaderOnly } from "../layout";

const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/following', component: Following},
    {path: '/search', component: Search, layout: null},
    {path: '/upload', component: Upload, layout: HeaderOnly},
]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}