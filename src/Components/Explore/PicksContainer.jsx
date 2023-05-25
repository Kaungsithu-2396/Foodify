import Loader from "../Loader";
import useFetch from "../Hooks/useFetch";
import TemplateCarousel from "../Carousel/TemplateCarousel";
import { useNavigate } from "react-router-dom";
import FetchError from "../FetchError";
export default function PicksContainer({ diet, type }) {
    const navigate = useNavigate();
    const { data, isLoading, isError } = useFetch(diet, type, true);
    const transformTxt = diet.charAt(0).toUpperCase() + diet.slice(0);
    return (
        <>
            <div className=" my-16 w-2/3 m-auto">
                <h1 className="md:text-4xl text-2xl">{transformTxt} Picks</h1>

                {isLoading ? <Loader /> : <TemplateCarousel data={data} />}
                {isError && <FetchError />}
            </div>
        </>
    );
}
