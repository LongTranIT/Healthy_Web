import HomePage from "../pages/Home"
import Caculated from "../pages/Caculated";
import FoodList from "../pages/FoodList";
import Menu from "../pages/Menu"
import MenuDetail from "../pages/MenuDetail"
import Statistic from "../pages/Statistic"
import NewMenu from "../pages/NewMenu"
import Exercise from "../pages/Exercise"
import ExerciseDetail from "../pages/ExerciseDetail"
import ExerciseDoing from "../pages/ExerciseDoing"
import { HeaderOnly } from "../layout";

const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/caculated', component: Caculated},
    {path: '/foodlist', component: FoodList},
    {path: '/menu', component: Menu},
    {path: '/menudetail', component: MenuDetail},
    {path: '/statistic', component: Statistic},
    {path: '/newMenu', component: NewMenu},
    {path: '/exercise', component: Exercise},
    {path: '/exercisedetail', component: ExerciseDetail},
    {path: '/exercisedoing', component: ExerciseDoing},
    // {path: '/search', component: Search, layout: null},
    // {path: '/upload', component: Upload, layout: HeaderOnly},
]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}