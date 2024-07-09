import { useContext, useEffect, useState } from "react";
import Form from "../components/Form/Form";
import Global from "../components/Global/Global";
import Hero from "../components/Hero/Hero";
import Provinsi from "../components/Provinsi/Provinsi";
import axios from "axios";
import Region from "../components/Regions/Region";
import CovidContext from "../Context/UseContext";

function HomePage() {
  const { setCovid } = useContext(CovidContext);

  async function getDataGlobal() {
    const url = "https://covid-fe-2023.vercel.app/api/global.json";
    const response = await axios(url);
    setCovid(response.data.global);
  }

  useEffect(() => {
    getDataGlobal();
  }, []);

  return (
    <>
      <Hero />
      <Global
        title="Global Situation"
        subtitle="Data Covid Berdasarkan Global"
      />
      <Region />
    </>
  );
}

export default HomePage;
