import React from "react";
import Nav from "./Nav";
import Results from "./Results";


import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Explore from "./Explore";
const query = new QueryClient();
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
        <QueryClientProvider client={query}>
            <RouterProvider router={router}>
                {/* >  <div className="h-screen overflow-hidden"></div */}
            </RouterProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
