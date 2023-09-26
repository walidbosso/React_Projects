import React from "react";

import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = React.useState("");

    React.useEffect(() => { // debouncing
        const delay = setTimeout(() => { //kistenna 0.5sec ad ki jma3 input ad ki eti resultat d search hsen mn chaque harf teeti resultat zaema z
            if (searchTerm) { // ida kayn
                navigate("/search?s=" + searchTerm); //kimshi l page d searchResult f route b s diala dak s kan qrawha b useParams aw useSearchParams
            }
        }, 500);

        return () => clearTimeout(delay);//kan waqfo timeout men baed akhir wahda, faqat melli AWED kan changiw input ad setTimeout ki khdem
    }, [searchTerm, navigate]); //The code inside `useEffect` will  run whenever `searchTerù` or `navigate` (or both) change between renders.

    const handleChange = (ev) => {
        setSearchTerm(ev.target.value); // ev yaeni chmen element, target yarni inna tag aytlo reference dialo, value ki hoz mn input chaque fois it changes
    };

    return (
        <div id="search">
            <label>Search</label>
            <input type="text" name="search" onChange={handleChange} />
        </div>
    );
};

export default Search;
