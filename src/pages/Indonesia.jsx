import React, { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Global from "../components/Global/Global";
import Provinsi from "../components/Provinsi/Provinsi";
import axios from "axios";
import CovidContext from "../Context/UseContext";

function IndonesiaPage() {

  const {setCovid } = useContext(CovidContext)
  const [regions, setRegions] = useState([]);

  async function getGlobalData() {
    const url = "https://covid-fe-2023.vercel.app/api/indonesia.json";
    const response = await axios(url);
    setCovid(response.data.indonesia);
  }

  async function getRegionData() {
    const url = "https://covid-fe-2023.vercel.app/api/indonesia.json";
    const response = await axios(url);
    setRegions(response.data.regions);
  }
  useEffect(() => {
    getGlobalData();
    getRegionData();
  }, []);
  return (
    <>
      <Hero />
      <Global
        title="Indonesia Situation"
        subtitle="Data Covid Berdasarkan Indonesia"
      />
      <Provinsi
        title="Situation by Provinces"
        subtitle="Data Covid Berdasarkan Provinsi"
        regions={regions}
      />
    </>
  );
}

export default IndonesiaPage;
