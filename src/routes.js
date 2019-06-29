const UserProfile = () => import('./views/UserProfile/UserProfile');
const Login = () => import('./views/Login/Login');

export const routes = [
  {
    path: '/users/:id',
    component: UserProfile,
    name: 'userProfile'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
];
