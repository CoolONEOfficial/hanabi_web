const UserProfile = () => import('./views/UserProfile/UserProfile');
const Login = () => import('./views/Login/Login');
const Task = () => import('./views/Task/Task');

export const routes = [
    {
        path: '/users/:id',
        component: UserProfile,
        name: 'User profile'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/task/:id',
        component: Task,
        name: 'Task description'
    },
    {
        path: '*',
        redirect: {
            name: 'login'
        }
    }
];
