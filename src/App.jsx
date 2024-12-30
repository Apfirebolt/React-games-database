import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./screens/Home";
import Games from "./screens/Games";
import About from "./screens/About";


const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/games" element={<Games/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;