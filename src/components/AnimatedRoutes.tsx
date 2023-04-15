import { Routes, Route, useLocation } from "react-router-dom";
import Top from "../pages/Top";
import Create from "../pages/Create";
import Table from "../pages/Table";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Top/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/table' element={<Table/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;