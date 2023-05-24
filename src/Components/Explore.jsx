import React, { useState } from "react";
import CuisineAsFlag from "./Explore/CuisineAsFlag";
import SearchEl from "./Search";

export default function Explore() {
    return (
        <>
            <div className="bg-gray-800 ">
                <div className=" w-11/12 py-5 m-auto ">
                    <CuisineAsFlag />
                    <SearchEl />
                </div>
            </div>
        </>
    );
}
