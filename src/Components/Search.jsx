import React, { useState } from "react";
import SearchElement from "./Explore/SearchEl";
import PicksContainer from "./Explore/PicksContainer";
export default function SearchEl() {
    const [enabled, setEnabled] = useState(false);
    const [show, setShow] = useState(true);
    const [data, setData] = useState("");
    const handleChange = (e) => {
        setData(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(false);
        setEnabled(true);
    };
    const CarouselComponent = () => {
        return (
            <>
                <PicksContainer diet={"vegetarian"} type={"diet"} />
                <PicksContainer diet={"ketogenic"} type={"diet"} />
            </>
        );
    };
    return (
        <div className=" my-5">
            <form
                action=""
                onSubmit={handleSubmit}
                className=" flex justify-center relative"
            >
                <input
                    type="text"
                    className=" md:px-8 md:py-6 px-6 py-4 outline-none  rounded-md  w-[40rem] md:w-full lg:w-[50rem] text-xl text-black relative bg-[#E5E5E5] "
                    placeholder="&#x1F50D;  (e.g Chicken)..."
                    onChange={handleChange}
                    required
                />
            </form>
            <div className="">
                {show ? (
                    <CarouselComponent />
                ) : (
                    <SearchElement data={data} enabled={enabled} />
                )}
            </div>
        </div>
    );
}
