import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import english from "../src/content/English";
import marathi from "../src/content/Marathi";
import Footer from "../src/components/Footer";
import Togglebtn from "./components/Togglebtn";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Gallery from "../src/Pages/Gallery";
import Blog from "../src/Pages/Blog";
import Contact from "../src/Pages/Contact";
import Success from "./Pages/Success";
import ScrollTop from "./components/ScrollTop";
import Cookies from "./Pages/Cookies"
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Marathwadacoach from "./Pages/Marathwadacoach";
import Jalsaksharta from "../src/Pages/Jalsaksharta";
import Taasandolan from "../src/Pages/Taasandolan";
import Latur from "../src/Pages/Laturvachava";
import Atal from "../src/Pages/Atalmaharogya";
import Namo from "../src/Pages/Namomaharojgar";
import Indra from "../src/Pages/Indraprashtha";
import Akka from "../src/Pages/Akkafoundation";

function App() {
  const [language, setlanguage] = useState(english);
  const [toggle, settoggle] = useState(true);
  const toggleJsonData = () => {
    setlanguage(language === english ? marathi : english);
    settoggle(!toggle);
  };

  const [photo, setphoto] = useState(true);
  const [video, setvideo] = useState(false);
  const [media, setmedia] = useState(false);
  const [personalphoto, setpersonalphoto] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header data={language} />
        <Togglebtn toggle={toggleJsonData} />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home data={language} />}></Route>
          <Route path="/about" element={<About data={language} />}></Route>
          <Route path="/success" element={<Success data={language} />}></Route>
          <Route
            path="/Marathwada_Coach_Factory"
            element={<Marathwadacoach data={language} />}
          ></Route>
          <Route
            path="/Jal_Saksharta_Rally"
            element={<Jalsaksharta data={language} />}
          ></Route>
          <Route path="/72_Taas_Andolan" element={<Taasandolan data={language} />}></Route>
          <Route
            path="/Latur_Vachava_Andolan"
            element={<Latur data={language} />}
          ></Route>
          <Route
            path="/Atal_Maharogya_Shibir"
            element={<Atal data={language} />}
          ></Route>
          <Route path="/Namo_Maharojgar_Melava" element={<Namo data={language} />}></Route>
          <Route path="/Indraprasth_Jalbhumi_Abhiyan" element={<Indra data={language} />}></Route>
          <Route path="/Akka_Foundation" element={<Akka data={language} />}></Route>
          <Route
            path="/gallery"
            element={
              <Gallery
                setvideo={setvideo}
                video={video}
                setphoto={setphoto}
                photo={photo}
                setmedia={setmedia}
                media={media}
                setpersonalphoto={setpersonalphoto}
                personalphoto={personalphoto}
                data={language}
              />
            }
          />
          <Route path="/blog" element={<Blog data={language} />}></Route>
          <Route path="/contact" element={<Contact data={language} />}></Route>
          <Route path="/cookies" element={<Cookies data={language} />}></Route>
          <Route path="/privacy_policy" element={<PrivacyPolicy data={language} />}></Route>
        </Routes>

        <Footer data={language} />
      </BrowserRouter>
    </div>
  );
}

export default App;
