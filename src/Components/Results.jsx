import React from "react";
import Search from "./Search";
export default function Results() {
    return (
        <>
            <div className=" h-screen text-white bg-black/40 ">
                <div className="flex justify-center flex-col items-center h-full w-full">
                    <h1 className="text-5xl text-center md:w-[83%] sm:w-[81%] lg:w-full">
                        Your <span className="text-yellow-500">Trusted</span>{" "}
                        Cooking Buddy
                        <br />
                        <span className="text-3xl text-gray-50/70">
                            Let us assist from one side in creating your
                            Delicious Meals
                        </span>
                    </h1>
                    <br />
                    <div className="">
                        <button className="px-5 py-3 rounded-md bg-yellow-500 text-black hover:scale-110 hover:text-white transistion-all duration-300 delay-100">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
