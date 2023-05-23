import React, { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Loader";
import FoodCard from "./FoodCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function FoodListCarousel() {
    var settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplayspeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const fetchVeg = () => {
        return axios
            .get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
                    import.meta.env.VITE_REACT_APP_API_KEY
                }&diet=vegetarian`
            )
            .then((res) => res.data);
    };
    const onError = (err) => console.log(err);
    const { data, isLoading } = useQuery({
        queryKey: ["vegetarian"],
        queryFn: () => fetchVeg(),
        select: (data) => {
            return data.results;
        },
        onError,
    });
    console.log(data);

    return (
        <>
            <div className=" h-screen mt-12">
                <h1 className="md:text-4xl text-2xl ">Vegetarian Pick 🥥</h1>
                {isLoading && <Loader />}
                <Slider {...settings}>
                    {data?.map((item) => {
                        return (
                            <FoodCard
                                src={item.image}
                                title={item.title}
                                key={item.id}
                            />
                        );
                    })}
                </Slider>
            </div>
        </>
    );
}
