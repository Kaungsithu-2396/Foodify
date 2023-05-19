import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const key = `27ac52df04924d6bacba312cd7c55c48`;
export default function FetchData() {
    const [state, setState] = useState([]);
    const fetchRecipe = () => {
        return axios
            .get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&African`
            )
            .then((res) => console.log(res.data));
    };
    useEffect(() => {
        fetchRecipe();
    }, []);
    return <h1>like</h1>;
}
