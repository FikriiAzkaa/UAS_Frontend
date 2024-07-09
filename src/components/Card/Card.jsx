import {
  CardHero,
  CardStatus,
  CardTotal
} from "./Card.styled"
function Card(props) {
  const { status, total } = props;

  return (
    <>
      <CardHero>
        <CardStatus>{status}</CardStatus>
        <CardTotal>{total}</CardTotal>
      </CardHero>
    </>
  );
}

export default Card;
