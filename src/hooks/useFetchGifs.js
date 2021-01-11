import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    // Fires it just when category changes
    useEffect(() => {
        getGifs(category)
            .then((imgs) => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category]);

    return state; 
};