
import "./HomePage.scss";
import HeaderSlider from "../../components/Slider/HeaderSlider.jsx";
function HomePage() {
    return (
        <main>
            <div className="slider-wrapper">
                <HeaderSlider />
            </div>
            <div className="main-content bg-whitesmoke">
                <div className="container">
                    <div className="categories py-5">
                        <div className="categories-item">
                            <div className="title-md">
                                <h3>See our products</h3>
                            </div>

                        </div>

                        <div className="categories-item">
                            <div className="title-md">
                                <h3>Categories</h3>
                            </div>

                        </div>

                        <div className="categories-item">
                            <div className="title-md">
                                <h3>Categories</h3>
                            </div>

                        </div>

                        <div className="categories-item">
                            <div className="title-md">
                                <h3>Categories</h3>
                            </div>

                        </div>

                        <div className="categories-item">
                            <div className="title-md">
                                <h3>Categories</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;