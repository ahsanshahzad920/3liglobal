import "./App.css";
import Footer from "./Components/Body/Footer";
import Navbar from "./Components/Body/Navbar";
import ContactUs from "./Components/Homepage/ContactUs";
import Home from "./Components/Main/Home";
import HubSpot from "./Components/Main/HubSpot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="hfeed site" id="page">
    <BrowserRouter>
    <Navbar />
        <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/hubspot" element={<HubSpot/>} />
        
        </Routes>
   
      {/* <ContactUs/> */}
      <Footer />
</BrowserRouter>
  
    </div>
  );
}

export default App;
