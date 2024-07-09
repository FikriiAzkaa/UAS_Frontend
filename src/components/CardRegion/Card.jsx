import {
  CardLeft,
  CardRegion,
  CardRight,
  CardStatus,
  CardTitle,
  CardTop,
  CardTotal
} from "./Card.styled"

function Card(props) {
  const { region } = props;
  const confirmed = region.numbers.confirmed.toLocaleString('id-ID');
  const recovered = region.numbers.recovered.toLocaleString('id-ID');
  const death = region.numbers.death.toLocaleString('id-ID');

  return (
    <CardRegion>
      <CardTitle>{region.name}</CardTitle>
      <CardTop>
        <CardLeft>
          <CardStatus>Confirmed</CardStatus>
          <CardTotal>{confirmed}</CardTotal>
        </CardLeft>
        <CardRight><h1>😷</h1></CardRight>
      </CardTop>
      <CardTop>
        <CardLeft>
          <CardStatus>Recovered</CardStatus>
          <CardTotal>{recovered}</CardTotal>
        </CardLeft>
        <CardRight><h1>😄</h1></CardRight>
      </CardTop>
      <CardTop>
        <CardLeft>
          <CardStatus>Death</CardStatus>
          <CardTotal>{death}</CardTotal>
        </CardLeft>
        <CardRight><h1>💀</h1></CardRight>
      </CardTop>
    </CardRegion>
  );
}

export default Card;
