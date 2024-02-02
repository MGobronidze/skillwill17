import LinkLayouts from "./Layouts/LinkLayouts";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

const router =[
    { 
        element: <LinkLayouts />,
        path: '/',
        children:[
            {
                element: <MainPage />,
                path: "/main"
            },
            {
                element: <AboutPage />,
                path: "/About"
            }
        ]
    }
]

export default router