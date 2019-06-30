const Hiring = () => import('./views/Hiring/Hiring');
const UserProfile = () => import('./views/User/UserProfile/UserProfile');
const Login = () => import('./views/Login/Login');
const ReviewList = () => import('./views/Review/ReviewList/ReviewList');
const ReviewItem = () => import('./views/Review/ReviewItem/ReviewItem');
const Task = () => import('./views/Task/Task');
const TaskList = () => import('./views/Task/TaskList/TaskList');

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
      path: '/reviews',
      component: ReviewList,
      name: 'Reviews',
    },
    {
        path: '/reviews/:id',
        component: ReviewItem,
        name: 'review',
    },{
        path: '/tasks',
        component: TaskList,
        name: 'Tasks'
    },
    {
        path: '/tasks/:id',
        component: Task,
        name: 'Task description'
    },
    {
        path: '/hiring',
        component: Hiring,
        name: 'Hiring'
    },
    {
        path: '*',
        redirect: {
            name: 'login'
        }
    }
];
