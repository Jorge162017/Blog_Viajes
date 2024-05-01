import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import('./home'));
const Login = React.lazy(() => import('./login'));
const Admin = React.lazy(() => import('./admin'));
import { AuthProvider, ProtectedRoute } from "./hoc";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}> {/* Aquí puedes poner cualquier componente de carga que prefieras */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
