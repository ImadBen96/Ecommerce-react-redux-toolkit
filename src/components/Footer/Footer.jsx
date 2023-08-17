import {Link} from "react-router-dom";
import "./Footer.scss";
function Footer() {
    return (
        <footer className="footer bg-orange">
            <div className="container py-4 text-center">
                <div className="flex align-center justify-center text-white fw-3 fs-14">
                    <Link to="/" className="text-uppercase">
                        privacy policy
                    </Link>
                    <div className="vert-line"></div>
                    <Link to="/" className="text-uppercase">
                        terms of service
                    </Link>
                    <div className="vert-line"></div>
                    <Link to="/" className="text-uppercase">
                        About Wiki Store.
                    </Link>
                </div>
                <span className="text-white copyright-text  fs-14 fw-3">
          &copy; 2023 Wiki Store. All Rights Reserved.
        </span>
            </div>
        </footer>
    );
}

export default Footer;