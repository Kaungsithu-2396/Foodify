import React from "react";

export default function CuisineTab({ title }) {
    return (
        <div>
            <span className="font-bold border-2 border-yellow-500 inline-block cursor-pointer p-5 hover:scale-105 delay-200 duration-200  hover:bg-yellow-500  rounded-md px-5 py-3 ">
                {title}
            </span>
        </div>
    );
}
