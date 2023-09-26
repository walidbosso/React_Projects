import React from "react";

import { useParams } from "react-router-dom";
import { getProducts } from "../fetcher";

import CategoryProduct from "./categoryProduct";

const Category = () => {
    const [products, setProducts] = React.useState({
        errorMessage: "",
        data: [],
    });
    const { categoryId } = useParams();//kan hozzo m URL

    React.useEffect(() => {
        const fetchData = async () => {//khass async w await sinon yqdar yhoz responseObject donne khawi
          const responseObject = await getProducts(categoryId);
            setProducts(responseObject);
        };
        fetchData();
    }, [categoryId]);//kolmaytbdl catgoryid li jibnaha men useParams ghay tfaeal useEffect

    const renderProducts = () => {
        return products.data.map((p) => (
            <CategoryProduct key={p.id} {...p}> {/* By using {...p}, all the properties of the object p will be passed as individual props to the CategoryProduct component. */}
                {p.title} {/* title ghateqra f west tag */}
            </CategoryProduct>
        ));
    };

    return (
        <div>
            {products.errorMessage && <div>Error: {products.errorMessage}</div>} {/* ida kayn errors hay t affichaw */}

            {products.data && renderProducts()} {/* chaque <CategoryProduct key={p.id} {...p}>  */}
                
        </div>
    );
};

export default Category; // export bash nqedro nqrawha barra file b import
