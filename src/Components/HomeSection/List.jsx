import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function List({ title, to }) {
    return (
        <div className="">
            <div className="hidden md:block hover:scale-110 transistion-all delay-100 duration-100 text-2xl  cursor-pointer">
                <h1 className="">
                    {" "}
                    <NavLink to={to}>{title}</NavLink>
                </h1>
            </div>
        </div>
    );
}
