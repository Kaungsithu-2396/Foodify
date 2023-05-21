import React from "react";
import Search from "./Search";
export default function Results() {
    return (
        <>
            <div className="">
                <div className="block md:hidden border-4 w-5/6 m-auto rounded-md mt-5">
                    <div className="">
                        <Search />
                    </div>
                </div>
            </div>
        </>
    );
}
