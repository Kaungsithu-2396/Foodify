import React from "react";
import CuisineAsFlag from "./Explore/CuisineAsFlag";
import SearchEl from "./Search";
import FoodListCarousel from "./Explore/FoodListCarousel";
export default function Explore() {
    return (
        <>
            <div className="bg-gray-800 h-screen ">
                <div className=" w-11/12 py-5 m-auto ">
                    <CuisineAsFlag />
                    <SearchEl />
                    <FoodListCarousel />
                    <FoodListCarousel />
                </div>
            </div>
        </>
    );
}
