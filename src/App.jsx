import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import IndonesiaPage from "./pages/Indonesia";
import ProvinsiPage from "./pages/Provinsi";
import AboutPage from "./pages/About";
import Layout from "./components/Layout/Layout";
import { useState } from "react";
import CovidContext from "./Context/UseContext";
import data from "./utils/constants/provinces";

function App() {
  const [covid, setCovid] = useState([]);

  const contextValue = {
    covid,
    setCovid,
  };
  return (
    <>
      <CovidContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/indonesia" element={<IndonesiaPage />}></Route>
            <Route path="/provinsi" element={<ProvinsiPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </Layout>
      </CovidContext.Provider>
    </>
  );
}

export default App;
