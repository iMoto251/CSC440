import React from 'react';
import styled from 'styled-components';

const H4 = styled.h4`
  grid-column: 1 / -1;
`;

//|data|data|

function ProductCategoryRow({category}) {
  return <H4> {category} </H4>;
}

export default ProductCategoryRow;
