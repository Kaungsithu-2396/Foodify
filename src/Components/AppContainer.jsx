import React from "react";
import Nav from "./HomeSection/Nav";
import Results from "./HomeSection/Results";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Explore from "./Explore";
import Cuisine from "./Explore/Cuisine";
import Detail from "./Detail/Detail";
import SearchResult from "./SearchResults/SearchResult";
const query = new QueryClient();
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Nav />}>
            <Route index element={<Results />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/cuisine/:name" element={<Cuisine />} />
            <Route path="/searchResult/:dish" element={<SearchResult />} />
            <Route path="detail/:id" element={<Detail />} />
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
