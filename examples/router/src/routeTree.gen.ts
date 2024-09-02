/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DadjokeIndexImport } from './routes/dadjoke.index'

// Create Virtual Routes

const DadjokeLazyImport = createFileRoute('/dadjoke')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const DadjokeLazyRoute = DadjokeLazyImport.update({
  path: '/dadjoke',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/dadjoke.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const DadjokeIndexRoute = DadjokeIndexImport.update({
  path: '/',
  getParentRoute: () => DadjokeLazyRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/dadjoke': {
      id: '/dadjoke'
      path: '/dadjoke'
      fullPath: '/dadjoke'
      preLoaderRoute: typeof DadjokeLazyImport
      parentRoute: typeof rootRoute
    }
    '/dadjoke/': {
      id: '/dadjoke/'
      path: '/'
      fullPath: '/dadjoke/'
      preLoaderRoute: typeof DadjokeIndexImport
      parentRoute: typeof DadjokeLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  DadjokeLazyRoute: DadjokeLazyRoute.addChildren({ DadjokeIndexRoute }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/dadjoke"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/dadjoke": {
      "filePath": "dadjoke.lazy.tsx",
      "children": [
        "/dadjoke/"
      ]
    },
    "/dadjoke/": {
      "filePath": "dadjoke.index.tsx",
      "parent": "/dadjoke"
    }
  }
}
ROUTE_MANIFEST_END */
