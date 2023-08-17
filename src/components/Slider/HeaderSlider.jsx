import "./HeaderSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {sliderImgs} from "../../utils/images.jsx";

function HeaderSidebar() {
    let settings = {

        autoplay: false,
        autoplaySpeed: 3000,
        arrows:true,
        fade: true,
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:"sample",
        centerMode: true,
        waitForAnimate: false,

    };

    return (

        <div className="slider">

            <div className="container">
                <div className="slider-content overflow-x-hidden">
                  <Slider  {...settings}>
                        <div className="slider-item">
                            <img src={sliderImgs[0]} alt="" />
                        </div>
                        <div className="slider-item">
                            <img src={sliderImgs[1]} alt="" />
                        </div>
                        <div className="slider-item">
                            <img src={sliderImgs[2]} alt="" />
                        </div>

                    </Slider>

                </div>
            </div>
        </div>
    );
}

export default HeaderSidebar;