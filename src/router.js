import LinkLayouts from "./Layouts/LinkLayouts";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import ParamPage from "./pages/ParamPage";

const router =[
    { 
        element: <LinkLayouts />,
        path: '/',
        children:[
            {
                element: <HomePage />,
                index: true 
            },
            {
                element: <MainPage />,
                path: "/main"
            },
            {
                element: <AboutPage />,
                path: "/about"
            }
        ]
    },
    {
        element: <ParamPage />,
        path: '/users/:id'
    },
    {
        element: <ErrorPage />,
        path: "*"
    }
]

export default router