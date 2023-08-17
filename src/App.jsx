import {BrowserRouter,Routes,Route} from "react-router-dom";
import {HomePage, CategoryProduct, ProductSingle, Cart, Search, CheckoutPage} from "./pages/index.jsx";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.scss'
import store from "./store/store.jsx";
import {Provider} from "react-redux";

function App() {

  return (
    <div className="App">
        <Provider  store={store}>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/product/:id" Component={ProductSingle} />
                    <Route path="/category/:category" Component={CategoryProduct} />
                    <Route path="/cart" Component={Cart} />
                    <Route path="/search/:searchTerm" Component={Search} />
                    <Route path="/checkout" Component={CheckoutPage} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>

    </div>
  )
}

export default App
