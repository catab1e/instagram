import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChatsPage from './components/pages/chats-page/ChatsPage';
import MainPage from './components/pages/MainPage';

const MainRoutes = () => {


    const PUBLIC_ROUTES = [
        {
          link: "/",
          element: <MainPage />,
          id: 1,
        },
        {
            link: "/chats",
            element: <ChatsPage/>,
            id: 2,
        }
      ];


    return (
        <Routes>
            {PUBLIC_ROUTES.map((item) => (
                <Route path={item.link} element={item.element} key={item.id} />
            ))}
        </Routes>
    );
};

export default MainRoutes;