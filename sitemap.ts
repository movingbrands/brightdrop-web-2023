export type Route = {
  path: string
  title: string
  description?: string
}

export type Group = {
  path?: string
  title: string
  routes: Record<string, Route>
}


export const routes = {
  home: {
    path: '/site/',
    title: 'Home',
    description: 'Home'
  },
  products: {
    path: '/site/products',
    title: 'Products',
    description: 'BrightDrop products',
    routes: {
      'brightdrop-zevo': {
        path: '/site/products/brightdrop-zevo',
        title: 'BrightDrop Zevo'
      },
      'brightdrop-trace-move': {
        path: '/site/products/brightdrop-trace-move',
        title: 'BrightDrop Trace Move'
      },
      'brightdrop-trace-grocery': {
        path: '/site/products/brightdrop-trace-grocery',
        title: 'BrightDrop Trace Grocery'
      },
      'brightdrop-core': {
        path: '/site/products/brightdrop-core',
        title: 'BrightDrop Core'
      },
      'zevo-safety': {
        path: '/site/products/zevo-safety',
        title: 'Zevo Safety'
      }
    }
  },
  solutions: {
    title: 'Industry solutions',
    routes: {
      'industry-solutions-parcel': {
        path: '/site/industry-solutions-parcel',
        title: 'Industry Solutions - Parcel'
      },
      'industry-solutions-grocery': {
        path: '/site/industry-solutions-grocery',
        title: 'Industry Solutions - Grocery'
      }
    }
  },
  about: {
    path: '/site/about-us',
    title: 'About',
    description: 'About BrightDrop'
  },
  careers: {
    path: '/site/careers',
    title: 'Careers',
    description: 'BrightDrop careers'
  },
  events: {
    path: '/site/events',
    title: 'Events',
    description: 'BrightDrop events'
  },
  support: {
    path: '/site/support',
    title: 'Support',
    description: 'BrightDrop support'
  },
  newsroom: {
    path: '/site/newsroom',
    title: 'Newsroom',
    description: 'BrightDrop newsroom'
  },
  contact: {
    path: '/site/request-info',
    title: 'Contact Sales'
  }
} as const

// const isGroup = (item: Route | Group): item is Group => 'routes' in item
// const isRoute = (item: Route | Group): item is Route => !('routes' in item)

// export const getRoute = (path: string) => {
//     const result = getByPath(routes, path)
//     return isRoute(result) ? result : null
// }

// export const getRoutes = (path?: string) => {
//     if (!path) {
//         return Object.keys(routes).map((key) => routes[key]).filter(isRoute)
//     }
//     const result = getByPath(routes, path)
//     if (isGroup(result)) {
//         return Object.keys(result.routes).map((key) => result.routes[key])
//     } else {
//         return [result]
//     }
// }
