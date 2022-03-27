import AdminPage from "./pages/AdminPage";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    POST_ROUTE,
    REGISTRATION_ROUTE,
    USER_ROUTE
} from "./utils/consts";
import UserPage from "./pages/UserPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <AdminPage/>
    },
    {
        path: USER_ROUTE + '/:id',
        element: <UserPage/>
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: <MainPage/>
    },
    {
        path: POST_ROUTE + '/:id',
        element: <PostPage/>
    },
    {
        path: LOGIN_ROUTE,
        element: <AuthPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <AuthPage/>
    },
    {
        path: ABOUT_ROUTE,
        element: <AboutPage/>
    }
]