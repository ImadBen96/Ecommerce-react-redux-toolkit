import {Link} from "react-router-dom";
import "./Navbar.scss";
import {useSelector,useDispatch} from "react-redux";
import {setSidebarOn} from "../../store/sidebarSlice.jsx";
// import {getSidebarStatus} from "../../store/sidebarSlice.jsx";
import {getAllCategories} from "../../store/categorySlice.jsx";
import {
    getCartData,
    getCartItemsCount,
    getCartTotal
} from "../../store/cartSlice";
import {useEffect} from "react";
function Navbar() {
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);
    // const temp = useSelector(getSidebarStatus);
    const itemsCount = useSelector(getCartItemsCount);
    const cartData = useSelector(getCartData);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch, cartData]);
    return (
        <nav className="navbar">
            <div className="navbar-cnt flex align-center">
                <div className="brand-and-toggler flex align-center">
                    <button
                        type="button"
                        className="sidebar-show-btn text-white"
                        onClick={
                            () => {
                                dispatch(setSidebarOn())
                            }
                        }
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <Link to="/" className="navbar-brand flex align-center">

                        <span className="navbar-brand-txt mx-2">
              <span style={ {'color': '#028fb7'}} className="fw-7">Wiki</span>Store
            </span>
                    </Link>
                </div>

                <div className="navbar-collapse w-100">
                    <div className="navbar-search bg-white">
                        <div className="flex align-center">
                            <input
                                type="text"
                                className="form-control fs-14"
                                placeholder="Search For your items here"

                            />
                            <Link
                                to=""
                                className="text-white search-btn flex align-center justify-center"
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
                        </div>
                    </div>

                    <ul className="navbar-nav flex align-center fs-14 fw-4">
                        {
                            // taking only first 8 categories
                            categories.slice(0, 8).map((category, idx) => (
                                <li className="nav-item no-wrap" key={idx}>
                                    <Link
                                        to={`category/${category}`}
                                        className="nav-link text-capitalize"
                                    >
                                        {category.replace("-", " ")}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="navbar-cart flex align-center">
                    <Link to="/cart" className="cart-btn" key="1">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className="cart-items-value">{itemsCount}</div>
                    </Link>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;