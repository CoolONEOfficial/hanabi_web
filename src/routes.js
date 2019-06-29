const UserProfile = () => import('./views/UserProfile/UserProfile');
const Login = () => import('./views/Login/Login');
const ReviewList = () => import('./views/Review/ReviewList/ReviewList');
const ReviewItem = () => import('./views/Review/ReviewItem/ReviewItem');
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
      path: '/reviews',
      component: ReviewList,
      name: 'reviews',
    },
    {
        path: '/reviews/:id',
        component: ReviewItem,
        name: 'review',
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
