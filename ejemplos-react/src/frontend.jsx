import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import ComponentsPage from "./ComponentsPage";
import NasaImageSearch from "./NasaImageSearch";
import RootLayout from "./RootLayout";
import StopWatchPage from "./StopWatchPage";
import TodosPage from "./TodosPage";

const elem = document.getElementById("root");
const app = (
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<App />} />
                    <Route path="/stop-watch" element={<StopWatchPage />} />
                    <Route path="/components" element={<ComponentsPage />} />
                    <Route path="/todos" element={<TodosPage />} />
                    <Route path="/nasa" element={<NasaImageSearch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
