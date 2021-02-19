import styled from 'styled-components';
import NormalA from 'components/A';

const A = styled(NormalA)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 25px;
  font-size: 18px;
`;

export default A;
