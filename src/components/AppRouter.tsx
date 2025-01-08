import React from "react"
import { Routes, Route } from "react-router-dom";
import { Paths } from "@/routes/Path";

const AppRouter: React.FC = () => {

    return (
        <Routes>
            {Paths.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={<route.component />} 
            />
            ))}
        </Routes>
    )
}

export default AppRouter;