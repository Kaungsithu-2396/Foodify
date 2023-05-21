import React from "react";

export default function Search() {
    return (
        <div>
            <form action="" className=" flex justify-center relative">
                <input
                    type="text"
                    className=" px-8 py-6 rounded-md  w-[40rem] md:w-full lg:w-[50rem] text-xl relative bg-[#ffff] "
                    placeholder="&#x1F50D;  (e.g Chicken)..."
                    required
                />
            </form>
        </div>
    );
}
