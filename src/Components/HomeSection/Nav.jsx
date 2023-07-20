import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";
import List from "./List";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

export default function Nav() {
    let [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <>
            <div className=" text-white    ">
                <div className="bg-gray-900">
                    <nav className=" w-4/5  md:w-[90%] flex justify-between  items-center m-auto    py-6">
                        <div
                            className="lg:text-5xl text-2xl text-white cursor-pointer sm:text-3xl md:hidden sm:block "
                            onClick={handleToggle}
                        >
                            <CiMenuFries />
                        </div>
                        <div className="cursor-pointer">
                            <Link to="/">
                                <h1 className="font-black lg:text-5txl text-white  text-3xl flex justify-center">
                                    <BiSearchAlt />
                                    <span className=" text-yellow-500 ">
                                        {" "}
                                        Food
                                    </span>
                                    <span className="text-white">ify</span>
                                </h1>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center gap-12 ">
                            <List title={"Home"} to={"/"} />
                            <List title={"Explore"} to={"/explore"} />
                        </div>
                        <div className="repo__  hidden md:block       cursor-pointer   hover:scale-105 hover:text-yellow-500  transistion-all duration-300 delay-200 rounded border-black">
                            <NavLink to="https://github.com/Kaungsithu-123/Foodify">
                                <h1 className="flex justify-center items-center gap-1 md:gap-2  text-xl md:text-3xl p-2  md:px-2 md:py-4">
                                    {" "}
                                    <AiFillGithub />
                                    <span className="hidden lg:block">
                                        GitHub
                                    </span>
                                </h1>
                            </NavLink>
                        </div>
                    </nav>
                </div>
                <Outlet />
            </div>

            {toggle && (
                <div className="fixed top-0 bg-slate-800/70 h-[100vh] w-[50%] text-white  transistion-all duration-200 delay-300">
                    <div
                        className="absolute right-2 top-4"
                        onClick={() => setToggle(false)}
                    >
                        <RxCross1 />
                    </div>
                    <ul className=" flex justify-center flex-col gap-y-5  items-center  h-[50%]">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/explore">Explore</NavLink>
                        </li>
                        <li className="">
                            <NavLink to="https://github.com/Kaungsithu-123/Foodify">
                                <AiFillGithub />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
