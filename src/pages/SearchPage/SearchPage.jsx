import React, { useEffect } from "react";
import "./SearchPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import {
    fetchAsyncSearchProduct,
    getSearchProducts,
    getSearchProductsStatus,
    clearSearch
} from "../../store/searchSlice";


function SearchPage() {
    const dispatch = useDispatch();
    const { searchTerm } = useParams();
    const searchProducts = useSelector(getSearchProducts);
    const searchProductsStatus = useSelector(getSearchProductsStatus);


    useEffect(() => {
        dispatch(clearSearch());
        dispatch(fetchAsyncSearchProduct(searchTerm));
    }, [searchTerm, dispatch]);

    if (searchProducts.length === 0 && searchProductsStatus !== STATUS.LOADING) {
        return (


                    <header>
                        <h1>No Products found</h1>
                    </header>


        );
    }


    return (
        <main>
            <div className="search-content bg-whitesmoke">
                <div className="container">
                    <div className="py-5">
                        <div className="title-md">
                            <h3>Search results:</h3>
                        </div>
                        <br />
                        {searchProductsStatus === STATUS.LOADING ? (
                            <Loader />
                        ) : (
                            <ProductList products={searchProducts} />
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SearchPage;