import React from "react";

export default function Results() {
    return (
        <>
            <div className="   home__section bg-repeat-y bg-cover ">
                <div className="bg-black/60 h-screen text-white">
                    <div className="flex justify-center flex-col items-center h-full w-full md:w-[83%] sm:w-[50%] lg:w-full m-auto">
                        <h1 className="text-3xl w-[80%] md:w-full lg:text-5xl text-center ">
                            Your{" "}
                            <span className="text-yellow-500">Trusted</span>{" "}
                            Cooking Buddy
                            <br />
                            <span className="text-2xl sm:w-[63%] lg:w-[30%] md:w-[70%] m-auto block  text-gray-50/70">
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
            </div>
        </>
    );
}
