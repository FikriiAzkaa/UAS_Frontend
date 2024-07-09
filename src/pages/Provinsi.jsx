import React, { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Provinsi from "../components/Provinsi/Provinsi";
import Form from "../components/Form/Form";
import CovidContext from "../Context/UseContext";
import data from "../utils/constants/provinces";

function ProvinsiPage() {
  const [regions, setRegions] = useState([])
  useEffect(()=> {
    setRegions(data.provinces);
  },[])
  return (
    <>
      <Hero />
      <Provinsi title="Provinsi" subtitle="Data Covid Berdasarkan Provinsi" regions={regions}/>
      <Form />
    </>
  );
}

export default ProvinsiPage;
