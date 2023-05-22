import React from "react";
import Nav from "./Nav";
import Results from "./Results";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Explore from "./Explore";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Nav />}>
            <Route index element={<Results />} />
            <Route path="/explore" element={<Explore />} />
        </Route>
    )
);
export default function AppContainer() {
    return (
        <RouterProvider router={router}>
            <div className="h-screen overflow-hidden"></div>
        </RouterProvider>
    );
}
