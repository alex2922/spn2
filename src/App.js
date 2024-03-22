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
import Samruddha from "../src/Pages/Samruddha_setkari";
import Drushti from "../src/Pages/Drushti";
import Harit from "../src/Pages/Harit_latur";
import Indraprashtha from "../src/Pages/Indraprashtha";
import Project_anandi from "../src/Pages/Project_anandi";
import Shivjayanti from "../src/Pages/Shivjayanti";
import Blog from "../src/Pages/Blog";
import Contact from "../src/Pages/Contact";
import Success from "./Pages/Success";
import ScrollTop from "./components/ScrollTop";
import Cookies from "./Pages/Cookies"
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Marathwadacoach from "./Pages/Marathwadacoach";

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
            path="/Marathwada"
            element={<Marathwadacoach data={language} />}
          ></Route>
          <Route
            path="/indraprashtha"
            element={<Indraprashtha data={language} />}
          ></Route>
          <Route path="/harit" element={<Harit data={language} />}></Route>
          <Route
            path="/shivjayanti"
            element={<Shivjayanti data={language} />}
          ></Route>
          <Route
            path="/anandi"
            element={<Project_anandi data={language} />}
          ></Route>
          <Route path="/drushti" element={<Drushti data={language} />}></Route>
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
