import React from "react";
import { Outlet, useParams } from "react-router-dom";
import CuisineCard from "./CuisineCard";
import useFetch from "../Hooks/useFetch";
import Loader from "../Loader";
export default function Cuisine() {
    const { name } = useParams();
    let txt = name.charAt(0).toUpperCase() + name.slice(1);
    const { data, isLoading } = useFetch(name.toLowerCase(), "cuisine");

    return (
        <>
            <div className="   bg-gray-800 ">
                <div className=" w-11/12  text-center md:text-left   m-auto py-7  text-4xl font-bold">
                    Cuisine of {txt}
                </div>
                <div className="px-5 grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 w-[90%] m-auto justify-items-center items-center bg-gray-800 ">
                    {/* fill id as prop and in detail component fetch data as ID we have to map data  */}
                    {isLoading && <Loader />}
                    {data?.map((item) => {
                        return (
                            <CuisineCard
                                key={item.id}
                                src={item.image}
                                title={item.title}
                                id={item.id}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
