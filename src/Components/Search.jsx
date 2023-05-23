import React from "react";

export default function SearchEl() {
    return (
        <div className=" my-5">
            <form action="" className=" flex justify-center relative">
                <input
                    type="text"
                    className=" md:px-8 md:py-6 px-6 py-4 outline-none  rounded-md  w-[40rem] md:w-full lg:w-[50rem] text-xl text-black relative bg-[#E5E5E5] "
                    placeholder="&#x1F50D;  (e.g Chicken)..."
                    required
                />
                {/* <button className="border text-black rounded px-3 py-2 md:px-5 md:py-3 bg-yellow-500 mx-3 hover:scale-105 hover:text-white duration-200 delay-200">
                    Submit
                </button> */}
            </form>
        </div>
    );
}
