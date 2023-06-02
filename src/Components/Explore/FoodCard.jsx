import React from "react";
import { Link } from "react-router-dom";

export default function FoodCard({ src, title, id }) {
    return (
        <div className="relative mt-5 w-[96%] xl:m-5 ">
            <img src={src} alt="" className="rounded opacity-80  w-full " />
            <div className="absolute lg:p-5 md:p-3 landscape:p-2 p-4 bottom-0 bg-black/75 w-full  rounded m-auto">
                <Link to={`/detail/${id}`}>
                    <h1 className="lg:text-xl md:text-sm xl:p-5 ">
                        {title.slice(0, 12)} ....
                    </h1>
                </Link>
            </div>
        </div>
    );
}
