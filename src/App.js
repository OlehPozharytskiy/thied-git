import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pMinDelay from "p-min-delay";

// Styles
import "./App.scss";
//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const HOME = lazy(() => pMinDelay(import("./pages/Main"), 1000));
const CONTACTS = lazy(() => pMinDelay(import("./pages/Contacts"), 1000));
const GALLERY = lazy(() => pMinDelay(import("./pages/Gallery"), 1000));
const ABOUT = lazy(() => pMinDelay(import("./pages/About"), 1000));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense
          fallback={
            <div className="spinner">
              <div className="fa-3x spinner-item">
                <i className="fas fa-spinner fa-pulse"></i>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="contacts" element={<CONTACTS />} />
            <Route path="gallery" element={<GALLERY />} />
            <Route path="about" element={<ABOUT />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
