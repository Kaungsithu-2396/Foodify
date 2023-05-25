import Loader from "../Loader";
import useFetch from "../Hooks/useFetch";
import TemplateCarousel from "../Carousel/TemplateCarousel";
import FetchError from "../FetchError";
export default function PicksContainer({ diet, type }) {
    const { data, isLoading, isError } = useFetch(diet, type,true);
    return (
        <>
            <div className=" my-16">
                <h1 className="md:text-4xl text-2xl">
                    {diet.toUpperCase()} Picks
                </h1>

                {isLoading ? <Loader /> : <TemplateCarousel data={data} />}
                {isError && <FetchError />}
            </div>
        </>
    );
}
