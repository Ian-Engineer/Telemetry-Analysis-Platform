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
                path: "*",
                Component: Routes.ErrorPage,
            }
        ]
    }
]);

export default router;