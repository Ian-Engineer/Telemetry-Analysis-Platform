import {
  createBrowserRouter,
} from "react-router-dom";
import Routes from './routes'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Routes.Root,
        children: [
            {
                path: '/',
                Component: Routes.HomePage,
            },
            {
                path: "/login",
                Component: Routes.LoginPage,
            },
            {
                path: "/register",
                Component: Routes.RegisterPage,
            },
            {
                path: "/dashboard",
                Component: Routes.DashboardPage,
            },
            {
                path: "/missions",
                Component: Routes.MissionsPage,
            },
            {
                path: "/settings",
                Component: Routes.SettingsPage,
            },
            {
                path: "/admin",
                Component: Routes.AdminPage,
            },
            {
                path: "*",
                Component: Routes.ErrorPage,
            }
        ]
    }
]);

export default router;