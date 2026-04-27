import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./About.jsx";
import App from "./App.jsx";
import Gallery from "./images/Gallery.jsx";
import Image from "./images/Image.jsx";
import Layout from "./layout/Layout.jsx";
import PageA from "./layout/PageA.jsx";
import PageB from "./layout/PageB.jsx";
import Profile from "./settings/Profile.jsx";
import Settings from "./settings/Settings.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="about" element={<About />} />

                {/* Rutas con nombre */}
                <Route path="settings">
                    <Route index element={<Settings />} />
                    <Route path="profile" element={<Profile />} />
                </Route>

                {/* Rutas con layout común */}
                <Route element={<Layout />}>
                    <Route path="a" element={<PageA />} />
                    <Route path="b" element={<PageB />} />
                </Route>

                {/* Rutas dinámicas */}
                <Route path="images">
                    <Route index element={<Gallery />} />
                    <Route path=":id" element={<Image />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
