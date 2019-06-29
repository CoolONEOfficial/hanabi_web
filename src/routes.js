const UserProfile = () => import('./views/UserProfile/UserProfile');
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
        path: '*',
        redirect: {
            name: 'login'
        }
    }
];
