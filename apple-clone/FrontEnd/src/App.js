import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Components
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Section1 from "./Components/Section-1/section1.js";
import Section2 from "./Components/Section-2/section2.js";
import Section3 from "./Components/Section-3/section3.js";
import Section4 from "./Components/Section-4/section4.js";
import Section5 from "./Components/Section-5/section5.js";
import Section6 from "./Components/Section-6/section6.js";
import Section7 from "./Components/Section-7/section7.js";
import Section8 from "./Components/Section-8/section8.js";
import Signin from "./Components/signed page/signin.js"
import Signup from "./Components/signed page/signup.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 />
              <Section8 />
            </>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
