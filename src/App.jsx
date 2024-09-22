import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WhatsappBut from "./Components/WhatsappButton/WhatsappBut";
import Logos from "./Pages/Logos/Logos";
import Poster from "./Pages/Posters/Poster";
import Websites from "./Pages/Websites/Websites";
import OrderYourPlan from "./Pages/OrderYourPlan/OrderYourPlan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Logos" element={<Logos />} />
          <Route path="/Posters" element={<Poster />} />
          <Route path="/Websites" element={<Websites />} />
          <Route path="/OrderYourPlan" element={<OrderYourPlan />} />
        </Routes>
        <WhatsappBut />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
