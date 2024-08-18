import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
