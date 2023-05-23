import React from "react";

export default function FoodCard({ src, title }) {
    return (
        <div className="relative mt-5 w-[96%] m-4">
            <img src={src} alt="" className="rounded opacity-80  w-full " />
            <div className="absolute p-5 bottom-0 bg-black/75 w-full  rounded m-auto">
                <h1 className="text-xl ">{title}</h1>
            </div>
        </div>
    );
}
