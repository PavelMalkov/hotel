import React, { useContext } from 'react'
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    Redirect
} from "react-router-dom";

import About from '../pages/About';
import Posts from '../pages/Posts';
import PostPage from '../pages/PostPage';

import { publicRoutes, privateRoutes } from '../routers/routers';
import Login from '../pages/Login';
import { AuthContext } from '../context';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    
    if (isLoading) {
        return <h1>Загрузка...</h1>
    }

    return (
        isAuth
            ?
            <Routes>
                {publicRoutes.map((route) =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route}
                    />
                )}
                <Route
                    path="*"
                    element={<Posts/>}
                />
            </Routes>
            :
            <Routes>
                {privateRoutes.map((route) =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route}
                    />
                )}
                <Route
                    path="*"
                    element={<Login/>}
                />
            </Routes>
    )
}


export default AppRouter;
