import React, { useState } from "react";
import CuisineAsFlag from "./Explore/CuisineAsFlag";
import SearchEl from "./Search";
import PicksContainer from "./Explore/PicksContainer";
export default function Explore() {
    return (
        <>
            <div className="bg-gray-800 ">
                <div className=" w-11/12 py-5 m-auto ">
                    <CuisineAsFlag />
                    <SearchEl />
                    <PicksContainer diet={"vegetarian"} type={"diet"} />
                    <PicksContainer diet={"ketogenic"} type={"diet"} />
                </div>
            </div>
        </>
    );
}
