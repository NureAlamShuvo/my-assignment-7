import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/errorpage/ErrorPage";
import HomePage from "../pages/homepage/HomePage";
import Stats from "../pages/stats/Stats";
import TimeLine from "../pages/timeline/TimeLine";
import FriendDetails from "../pages/detailspage/FriendDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/timeline',
        Component: TimeLine,
        loader: async () => {
          const res = await fetch('/data.json');
          return res.json();
        }
      },
      {
        path: '/stats',
        Component: Stats
      },
      {
        path: '/friend/:id',
        Component: FriendDetails,
        loader: async ({ params }) => {
          const res = await fetch('/data.json');
          const data = await res.json();
          return data.find(friend => friend.id === parseInt(params.id));
        }
      }
    ],
    errorElement: <ErrorPage />
  }
])
