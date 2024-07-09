import {  useEffect, useState } from "react";
import Card from "../CardRegion/Card";
import axios from "axios";
import {
  RegionContainer,
  RegionSection,
  RegionSubtitle,
  RegionTitle,
  CardContainer,
} from "./Region.styled";

function Region() {
  const [ regions, setRegions ] = useState([]);

  async function getRegionsData() {
    const url = "https://covid-fe-2023.vercel.app/api/global.json";
    const response = await axios(url);
    setRegions(response.data.regions);
  }

  useEffect(() => {
    getRegionsData();
  }, []);

  return (
    <RegionContainer>
      <RegionSection>
        <RegionTitle>Situation By Regions</RegionTitle>
        <RegionSubtitle>Bacaan Pilihan Covid</RegionSubtitle>
        <CardContainer>
          {regions.map((region) => (
            <Card key={region.name} region={region} />
          ))}
        </CardContainer>
      </RegionSection>
    </RegionContainer>
  );
}

export default Region;
