import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";
import List from "./List";

import { Outlet } from "react-router-dom";

export default function Nav() {
    let [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <>
            <div className=" text-white h-screen   ">
                <div className="bg-gray-900">
                    <nav className=" w-4/5  md:w-[90%] flex justify-between  items-center m-auto    py-6">
                        <div
                            className="lg:text-5xl text-2xl text-white cursor-pointer sm:text-3xl md:hidden sm:block "
                            onClick={handleToggle}
                        >
                            <CiMenuFries />
                        </div>
                        <div className="cursor-pointer">
                            <h1 className="font-black lg:text-5xl text-white  text-3xl flex justify-center">
                                <BiSearchAlt />
                                <span className=" text-yellow-500 "> Food</span>
                                <span className="text-white">ify</span>
                            </h1>
                        </div>
                        <div className="flex justify-center items-center gap-12 ">
                            <List title={"Home"} to={"/"} />
                            <List title={"Explore"} to={"/explore"} />
                        </div>
                        <div className="repo__  hidden md:block       cursor-pointer   hover:scale-105 hover:text-yellow-500  transistion-all duration-300 delay-200 rounded border-black">
                            <h1 className="flex justify-center items-center gap-1 md:gap-2  text-xl md:text-3xl p-2  md:px-2 md:py-4">
                                {" "}
                                <span>
                                    <AiFillGithub />
                                </span>
                                <span className="hidden lg:block">GitHub</span>
                            </h1>
                        </div>
                    </nav>
                </div>
                <Outlet />
            </div>

            {toggle && (
                <div className="absolute top-0 bg-red-500 h-screen w-[50%] text-white  transistion-all duration-200 delay-300">
                    <h1 className="cursor-pointer">minglar par</h1>
                </div>
            )}
        </>
    );
}
