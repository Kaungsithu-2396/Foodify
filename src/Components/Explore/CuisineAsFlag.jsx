import React from "react";
import CuisineTab from "./CuisineTab";
export default function CuisineAsFlag() {
    return (
        <div>
            <div className="">
                <h1 className="text-3xl">Popular Cuisines</h1>
                <div className="flex justify-start  gap-4 mt-4 lg:w-[30%] flex-wrap ">
                    <CuisineTab title={"Italian"} />
                    <CuisineTab title={"African"} />
                    <CuisineTab title={"Netharland"} />
                    <CuisineTab title={"USA"} />
                    <CuisineTab title={"England"} />
                    <CuisineTab title={"Myanmar"} />
                </div>
            </div>
        </div>
    );
}
