import React from "react";
import CuisineTab from "./CuisineTab";
export default function CuisineAsFlag() {
    return (
        <div>
            <div className="">
                <h1 className="text-3xl">Popular Cuisines</h1>
                <div className="flex justify-start  gap-4 mt-4 md:w-[60%] lg:w-[30%] max-lg:w-[35%] flex-wrap ">
                    <CuisineTab title={"Italian"} to={"italian"} />
                    <CuisineTab title={"African"} to={"african"} />
                    <CuisineTab title={"French"} to={"french"} />
                    <CuisineTab title={"Indian"} to={"indian"} />
                    <CuisineTab title={"Chinsese"} to={"chinese"} />
                    <CuisineTab title={"Thai"} to={"thai"} />
                </div>
            </div>
        </div>
    );
}
