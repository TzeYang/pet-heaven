import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import PetList from "./components/PetList";
import MemberRegistration from "./components/MemberRegistration";
import PetReleaseForm from "./components/PetReleaseForm";
import PetAdoptionForm from "./components/PetAdoptionForm";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/register" element={<MemberRegistration />} />
          <Route path="/release" element={<PetReleaseForm />} />
          <Route path="/adopt" element={<PetAdoptionForm />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
