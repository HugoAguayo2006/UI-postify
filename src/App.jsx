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
      <main className="pb-14">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
