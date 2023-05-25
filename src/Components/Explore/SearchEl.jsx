import useFetch from "../Hooks/useFetch";
import Loader from "../Loader";
import FoodCard from "./FoodCard";
export default function SearchElement({ data, enabled }) {
    const transformTxt = data.toLowerCase(); //to ensure no request api error occur
    const {
        data: el,
        isLoading,
        isError,
    } = useFetch(transformTxt, "query", enabled);
    return (
        <div>
            <h1 className="text-3xl m-5 text-center md:text-left">
                Result of '{data}'
            </h1>
            {/* {isLoading && <Loader />}
            {isError && <h1>Something Wrong...</h1>} */}
            {/* {el?.map((item) => {
                return (
                    <FoodCard
                        src={item.image}
                        title={item.title}
                        key={item.id}
                    />
                );
            })} */}
            {isLoading && <Loader />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {el?.map((item) => {
                    return (
                        <FoodCard
                            id={item.id}
                            src={item.image}
                            title={item.title}
                            key={item.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}
