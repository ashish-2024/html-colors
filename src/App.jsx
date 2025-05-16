import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HtmlColors from "./components/htmlColors";

const App = () => {
    return (
        <>
            <Header />
            <HtmlColors />
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default App;
