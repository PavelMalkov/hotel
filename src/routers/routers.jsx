import About from "../pages/About"
import Posts from "../pages/Posts"
import PostPage from "../pages/PostPage"
import Login from "../pages/Login"

export const privateRoutes  = [
    {path: '/login', component: <Login/>, exact: true}
]
export const publicRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostPage/>, exact: true}
]