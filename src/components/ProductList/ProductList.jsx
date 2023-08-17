// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ProductList.scss";
import Product from "../Product/Product.jsx";
// eslint-disable-next-line react/prop-types
function ProductList({ products }) {

    return (
        <div className="product-lists grid bg-whitesmoke my-3">
            {/* eslint-disable-next-line react/prop-types */}
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
}

export default ProductList;