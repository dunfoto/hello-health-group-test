import { RoutesTypes } from 'src/types'
import Increment from 'src/containers/Increment'
import Dashboard from 'src/containers/Dashboard'

const routes: RoutesTypes[] = [
    {
        name: 'Dashboard',
        pathName: '/dashboard',
        component: Dashboard,
    },
    {
        name: 'Increment',
        pathName: '/increment',
        component: Increment,
    },
]

export default routes
