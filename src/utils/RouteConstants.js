import CoverPage from "../pages/CoverPage"
import ExperiencePage from "../pages/ExperiencePage"
import HomePage from "../pages/HomePage"
import ResumePage from "../pages/ResumePage"

const RouteConstants = [
    {
        title: 'Home',
        path: '/',
        component: HomePage
    },
    {
        title: 'Experience',
        path: '/experience',
        component: ExperiencePage
    },
    {
        title: 'Resume',
        path: '/resume',
        component: ResumePage
    },
    {
        title: 'Cover Letter',
        path: '/coverletter',
        component: CoverPage
    }
]

export default RouteConstants