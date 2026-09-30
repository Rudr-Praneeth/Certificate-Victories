import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import LearnerNavbar from "./LearnerNavbar";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const { pathname } = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const closeLogin = useCallback(() => setLoginOpen(false), []);

  return (
    <>
      {user ? (
        <LearnerNavbar />
      ) : (
        <>
          <Header />
          <Navbar onLogin={() => setLoginOpen(true)} />
        </>
      )}
      <main>
        <Outlet />
      </main>
      <Footer simplified={Boolean(user)} />
      <LoginModal open={loginOpen && !user} onClose={closeLogin} />
    </>
  );
};

export default Layout;
