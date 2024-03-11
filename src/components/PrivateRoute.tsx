// PrivateRoute.tsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
    element: React.ReactNode,
    isAuthenticated: boolean,
    isAdmin: boolean,
    path: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated, isAdmin, path }) => {
    if (!isAuthenticated) {
        // Jeśli użytkownik nie jest zalogowany, przekieruj go do strony logowania
        return <Navigate to="/login" />;
    }

    if (!isAdmin) {
        // Jeśli użytkownik nie jest administratorem, przekieruj go do strony błędu lub innej dostępnej dla niego strony
        return <Navigate to="/error" />;
    }

    // Jeśli użytkownik jest zalogowany i jest administratorem, udostępnij mu chronioną trasę
    return <Route element={element} />;
};

export default PrivateRoute;
