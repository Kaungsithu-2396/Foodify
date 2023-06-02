import { useParams } from "react-router-dom";
import SearchEl from "../Search";
import CuisineAsFlag from "../Explore/CuisineAsFlag";
import useFetch from "../Hooks/useFetch";
import Loader from "../Loader";
import FoodCard from "../Explore/FoodCard";
import Footer from "../Footer";
export default function SearchResult() {
    const { dish } = useParams();
    const {
        data: el,
        isLoading,
        isError,
    } = useFetch(dish.toLowerCase(), "query");
    return (
        <div>
            <div className="my-2 w-11/12 py-5 m-auto">
                <CuisineAsFlag />
                <SearchEl />
            </div>
            <h1 className="text-3xl m-8 text-center md:text-left">
                Result of '{dish}'
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2  w-3/4 m-auto md:w-2/3  lg:grid-cols-3">
                {isLoading && <Loader />}
                {el?.map((item) => {
                    return (
                        <FoodCard
                            src={item.image}
                            key={item.id}
                            id={item.id}
                            title={item.title}
                        />
                    );
                })}
            </div>
        </div>
    );
}
