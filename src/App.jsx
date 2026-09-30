import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Career from "./pages/Career";
import LearnerHome from "./pages/LearnerHome";
import MyLearning from "./pages/MyLearning";
import CertificateView from "./pages/CertificateView";
import { useAuth } from "./context/AuthContext";

const Index = () => {
  const { user } = useAuth();
  return user ? <LearnerHome /> : <Home />;
};

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="careers/:slug" element={<Career />} />
        <Route path="my-learning" element={<MyLearning />} />
        <Route path="certificate/:id" element={<CertificateView />} />
      </Route>
    </Routes>
  );
};

export default App;
