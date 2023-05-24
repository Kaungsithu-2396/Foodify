import useFetch from "../Hooks/useFetch";
import Loader from "../Loader";
import FoodCard from "./FoodCard";
export default function SearchElement({ data }) {
    const transformTxt = data.toLowerCase(); //to ensure no request api error occur
    const { data: el, isLoading, isError } = useFetch(transformTxt, "query");
    return (
        <div>
            <h1>Result of '{data}'</h1>
            {isLoading && <Loader />}
            {isError && <h1>Something Wrong...</h1>}
            {el?.map((item) => {
                return (
                    <FoodCard
                        src={item.image}
                        title={item.title}
                        key={item.id}
                    />
                );
            })}
        </div>
    );
}
