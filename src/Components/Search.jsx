import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

export default function SearchEl() {
    const navigate = useNavigate();
    const [data, setData] = useState("");

    const handleChange = (e) => {
        setData(e.target.value);
    };
    const debounceOnChangeHandler = debounce(handleChange, 3000);
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/searchResult/" + data);
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
        </div>
    );
}
