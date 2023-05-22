import React from "react";

export default function List({ title }) {
    return (
        <div className="">
            <div className="hidden md:block hover:text-yellow-500 text-3xl  cursor-pointer">
                <h1 className="">{title}</h1>
            </div>
        </div>
    );
}
