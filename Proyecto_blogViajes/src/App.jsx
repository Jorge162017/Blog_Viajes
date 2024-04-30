import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Admin from "./admin";
import { AuthProvider, ProtectedRoute} from "./hoc";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
