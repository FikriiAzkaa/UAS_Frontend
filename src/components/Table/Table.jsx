import React from "react";

function Table(props) {
  const { no, region, kota, kasus, sembuh, meninggal, dirawat } = props;

  // const kasus = region.kasus || region.numbers && region.numbers.confirmed;
  // const sembuh = region.sembuh || region.numbers && region.numbers.recovered;
  // const meninggal = region.meninggal || region.numbers && region.numbers.death;
  // const dirawat = region.dirawat || region.numbers && region.numbers.treatment;
  const name =  region.name;
  const confirmed = region.numbers && region.numbers.confirmed;
  const recovered = region.numbers && region.numbers.recovered;
  const death = region.numbers && region.numbers.death;
  const treatment = region.numbers && region.numbers.treatment;

  console.log(kasus);
  return (
    <>
      <tbody>
        <tr>
          <td>{no}</td>
          <td>{kota || name}</td>
          <td>{kasus || confirmed}</td>
          <td>{sembuh || recovered}</td>
          <td>{meninggal || death}</td>
          <td>{dirawat || treatment}</td>
        </tr>
      </tbody>
    </>
  );
}

export default Table;
