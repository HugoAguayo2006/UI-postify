import "./App.css";
import { Outlet, useLocation } from "react-router";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";

function App() {
  const { pathname } = useLocation();
  const isPostPage = pathname === "/post";

  return (
    <>
      <ScrollToTop />
      {!isPostPage && <Navbar />}
      <main className={`min-h-screen bg-[#050a0e] text-white ${isPostPage ? "" : "pb-16"}`}>
        <Outlet />
      </main>
      {!isPostPage && <Footer />}
    </>
  );
}

export default App;
