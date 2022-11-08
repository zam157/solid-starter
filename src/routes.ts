import type { RouteDefinition } from '@solidjs/router'

import Home from './pages'
import AboutData from './hooks/about.data'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    data: AboutData,
  },
  {
    path: '**',
    component: lazy(() => import('./pages/[...all]')),
  },
]
