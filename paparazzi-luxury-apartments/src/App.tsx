import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";

const Rooms = lazy(() => import("./pages/Rooms"));
const RoomDetail = lazy(() => import("./pages/RoomDetail"));
const About = lazy(() => import("./pages/About"));
const Amenities = lazy(() => import("./pages/Amenities"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ThingsToDo = lazy(() => import("./pages/ThingsToDo"));
const Location = lazy(() => import("./pages/Location"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const HouseRules = lazy(() => import("./pages/HouseRules"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = window.location;
  if (pathname) window.scrollTo({top:0,behavior:"auto"});
  return null;
}

export default function App() {
  return <BrowserRouter><Header/><ScrollToTop/><main id="main"><Suspense fallback={<div className="page-loading">Loading</div>}><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/rooms" element={<Rooms/>}/>
    <Route path="/rooms/:slug" element={<RoomDetail/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/amenities" element={<Amenities/>}/>
    <Route path="/gallery" element={<GalleryPage/>}/>
    <Route path="/things-to-do" element={<ThingsToDo/>}/>
    <Route path="/location" element={<Location/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/house-rules" element={<HouseRules/>}/>
    <Route path="/privacy-policy" element={<Legal kind="privacy"/>}/>
    <Route path="/cookie-policy" element={<Legal kind="cookie"/>}/>
    <Route path="/terms" element={<Legal kind="terms"/>}/>
    <Route path="/accessibility" element={<Legal kind="accessibility"/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes></Suspense></main><Footer/></BrowserRouter>;
}