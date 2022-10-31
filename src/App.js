import "./App.css";
import ContactForm from "./components/ContactForm";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Route, Routes } from "react-router-dom";
import ThankYouPage from "./components/ThankYouPage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<ContactForm />} />
        <Route exact path="/thankyou" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
