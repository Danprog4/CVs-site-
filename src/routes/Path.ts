import People from "@/pages/People"
import About from "@/pages/About"
import PeopleProfile from "@/pages/PeopleProfile"
import FavoriteList from "@/pages/FavoriteList"

export const Paths = [
    { path: '/employyes', component: People },
    { path: '/about', component: About },
    { path: '/*', component: People },
    { path: '/employyes/:peopleId', component: PeopleProfile},
    { path: '/favorite', component: FavoriteList }
]