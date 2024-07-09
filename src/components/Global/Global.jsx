import { useContext } from 'react';
import Card from '../Card/Card';

import {
  GlobalContainer,
  GlobalSection,
  GlobalSubtitle,
  GlobalTitle,
  CardContainer,
} from "./Global.styled"
import CovidContext from '../../Context/UseContext';

function Global(props) {

  const {title, subtitle} = props
  const {covid, setCovid} = useContext(CovidContext)

  return (
    <GlobalContainer>
      <GlobalSection>
        <GlobalTitle>{title}</GlobalTitle>
        <GlobalSubtitle>{subtitle}</GlobalSubtitle>
        <CardContainer>
          {covid.map((item, index) => (
            <Card key={index} status={item.status} total={item.total.toLocaleString("id-ID")} />
          ))}
        </CardContainer>
      </GlobalSection>
    </GlobalContainer>
  );
}

export default Global;
