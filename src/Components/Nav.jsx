import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";
import Search from "./Search";
export default function Nav() {
    return (
        <div className="bg-[#edf2f4]">
            <nav className=" w-4/5 md:w-[90%] flex justify-between items-center m-auto    py-6">
                <div className="lg:text-5xl text-2xl cursor-pointer sm:text-3xl md:hidden sm:block ">
                    <CiMenuFries />
                </div>
                <div className="cursor-pointer">
                    <h1 className="font-black md:text-5xl  text-3xl flex justify-center">
                        <BiSearchAlt />
                        <span className=" text-yellow-500 "> Food</span>
                        ify
                    </h1>
                </div>
                {/* <div className="hidden lg:block">
                    <h1>Explore</h1>
                </div>
                <div className="hidden  lg:block">
                    <h1>My Ingridents</h1>
                </div> */}
                <div className="search__box hidden md:block ">
                    <Search />
                </div>
                <div className="repo__         cursor-pointer   hover:scale-105  transistion-all duration-300 delay-200 rounded border-black">
                    <h1 className="flex justify-center items-center gap-1 md:gap-2  text-xl md:text-3xl p-2 md:px-2 md:py-4">
                        {" "}
                        <span>
                            <AiFillGithub />
                        </span>
                        GitHub
                    </h1>
                </div>
            </nav>
           
        </div>
    );
}
