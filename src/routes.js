const UserProfile = () => import('./views/UserProfile/UserProfile');

export const routes = [
  {
    path: '/users/:id',
    component: UserProfile,
    name: 'userProfile'
  }
];
