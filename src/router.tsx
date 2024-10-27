import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/notfound/NotFound";
import Albums from "./pages/albums/Albums";
import Album from "./pages/album/Album";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import { userLoader, usersLoader } from "./loaders/userLoader";
import { albumLoader, albumsLoader } from "./loaders/albumLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/albums",
                element: <Albums />,
                children: [],
                loader: albumsLoader
            },
            {
                path: "/albums/:id",
                element: <Album />,
                loader: albumLoader
            },
            {
                path: "/users",
                element: <Users />,
                loader: usersLoader,
            },
            {
                path: "/users/:id",
                element: <User />,
                loader: userLoader,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])