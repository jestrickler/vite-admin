# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

node v21.4.0 (npm v10.2.4)

loosely based on:
- https://www.youtube.com/watch?v=wYpCWwD1oz0
- https://github.com/ed-roh/react-admin-dashboard

# Updates
trying several concepts related to React.js 18 features and libraries

Setup
- initial setup uses vite
- try out project structure by feature
- no tests, no storybook, no ErrorBoundary :(
- nivo has a bunch of accessibility errors in AxeDevTools :(
- titles in my sidebar are accessibility errors :(
- wasn't paying enough attention to responsive design :(

MUI
- simplify MUI usage where possible
- remove external color system and keep colors in MUI theme
- remove all 'px' styles so sizing is relative to MUI theme
- keep all styling within 'sx' property 

Accessibility
- skip link
- page titles
- 
React-router
- use new 6.4 data loader
- use lazy loading for code splitting
- use deferred loading with Suspense and Await to display Skeleton

React-query
- 'mock-server' uses json-server for backend
- build api getXyzQuery to return { queryKey, queryFn } with axios
- loader uses queryClient.ensureQueryData(getXyzQuery()) to populate cache
- PageView component uses useSuspenseQuery(getXyzQuery()) to retrieve cached data (and update cache)