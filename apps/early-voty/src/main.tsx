import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './libs/sass/global.scss'

import EntryPage from './pages/entry'
import HomePage from './pages/home'
import NewVotePage from './pages/new-vote'
import VoteDetail from './pages/vote-detail'

import ScreenLayout from './components/screen-layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ScreenLayout />,
    children: [
      {
        path: '',
        element: <EntryPage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'new-vote',
        element: <NewVotePage />,
      },
      {
        path: 'new-vote',
        element: <NewVotePage />,
      },
      {
        path: 'vote/:id',
        element: <VoteDetail />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
