import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen bg-[#050a0e] pb-16 text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
