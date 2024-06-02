import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import Layout from "./layouts/Layout"
import FavoritesPage from "./views/FavoritesPage"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path='/' element={<IndexPage />} index />
                    <Route path="/favoritos" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
