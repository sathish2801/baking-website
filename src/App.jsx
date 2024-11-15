import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import Banner from "./components/Banner";
import Header from "./components/Header";
import VideoAd from "./components/Home";
import AboutUs from "./pages/AboutUs";
import ItemsPage from "./pages/ItemsPage";
import { Custom } from "./pages/Custom";
import UserStories from "./pages/UserStories";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [offerMessage, setOfferMessage] = useState("");

  useEffect(() => {
    const currentEvent = "Christmas"; 
    const offers = {
      Christmas: "🎄🎁Christmas Offer: Get 20% off on all services!🤎🍫🍪🎉",
      Diwali: "Diwali Special: Flat 15% off on loans!🎇🪔🏵️🧨🎆",
    };

    if (offers[currentEvent]) {
      setOfferMessage(offers[currentEvent]);
    }
  }, []);

  return (
    <Router> {/* Wrap the app with BrowserRouter */}
      <div className="App">
        {offerMessage && <Banner message={offerMessage} />}
        <Header />
        
        {/* Define routes for each page */}
        <Routes>
        <Route path="/" element={(
            <>
              <VideoAd />
              <AboutUs />
              <ItemsPage />
              <Custom />
              <UserStories />
              <Contact />
            </>
          )} /> 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/user-stories" element={<UserStories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
