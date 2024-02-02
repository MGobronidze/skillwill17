import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

const router =[
    {
        element: <MainPage />,
        path: "/"
    },
    {
        element: <AboutPage />,
        path: "/About"
    }
]

export default router